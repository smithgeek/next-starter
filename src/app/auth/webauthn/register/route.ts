import {
	generateRegistrationOptions,
	verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { RegistrationResponseJSON } from "@simplewebauthn/typescript-types";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../[...nextauth]/authOptions";
import {
	getChallenge,
	getCredentialsForUser,
	saveChallenge,
	saveCredentials,
} from "../credentials";
import aaguids from "./aaguid.json";

const domain = process.env.APP_DOMAIN!;
const origin = process.env.APP_ORIGIN!;
const appName = process.env.APP_NAME!;

/**
 * handles GET /auth/webauthn/register.
 *
 * This function generates and returns registration options.
 */
async function handlePreRegister(req: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session?.user) {
		return NextResponse.json(
			{ message: "Authentication is required" },
			{ status: 401 }
		);
	}
	const { email, id } = session.user;
	if (!email || !id) {
		return NextResponse.json(
			{ message: "Authentication is required" },
			{ status: 401 }
		);
	}

	const credentials = await getCredentialsForUser(email);

	const options = await generateRegistrationOptions({
		rpID: domain,
		rpName: appName,
		userID: id,
		userName: email,
		attestationType: "direct",
		authenticatorSelection: {
			userVerification: "preferred",
		},
	});
	options.excludeCredentials = credentials.map(c => ({
		id: c.credentialIdBase64,
		type: "public-key",
		transports: c.transports,
	}));

	try {
		await saveChallenge({ userId: id, challenge: options.challenge });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ message: "Could not set up challenge." },
			{ status: 500 }
		);
	}
	return NextResponse.json(options);
}

/**
 * handles POST /auth/webauthn/register.
 *
 * This function verifies and stores user's public key.
 */
async function handleRegister(req: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session?.user) {
		return NextResponse.json(
			{ success: false, message: "You are not connected." },
			{ status: 401 }
		);
	}
	const { id } = session.user;
	if (!id) {
		return NextResponse.json(
			{ success: false, message: "You are not connected." },
			{ status: 401 }
		);
	}
	const challenge = await getChallenge(id);
	if (!challenge) {
		return NextResponse.json(
			{ success: false, message: "Pre-registration is required." },
			{ status: 401 }
		);
	}
	const registrationResponse: RegistrationResponseJSON = await req.json();
	const { verified, registrationInfo } = await verifyRegistrationResponse({
		response: registrationResponse,
		expectedRPID: domain,
		expectedOrigin: origin,
		expectedChallenge: challenge,
	});

	if (!verified || !registrationInfo) {
		return NextResponse.json(
			{ success: false, message: "Something went wrong" },
			{ status: 500 }
		);
	}
	try {
		let passkeyName: string | null = null;
		if (registrationInfo.aaguid in aaguids) {
			passkeyName = (aaguids as any)[registrationInfo.aaguid].name;
		}
		await saveCredentials({
			credentialId: registrationInfo.credentialID,
			transports: registrationResponse.response.transports ?? [
				"internal",
			],
			userId: id,
			key: registrationInfo.credentialPublicKey,
			counter: registrationInfo.counter,
			name: passkeyName,
			aaguid: registrationInfo.aaguid,
		});
		return NextResponse.json({ success: true }, { status: 201 });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ success: false, message: "Could not register the credential." },
			{ status: 500 }
		);
	}
}

export { handlePreRegister as GET, handleRegister as POST };
