import { generateAuthenticationOptions } from "@simplewebauthn/server";
import { NextRequest, NextResponse } from "next/server";
import { getCredentialsForUser, saveChallenge } from "../credentials";

/**
 * handles GET /auth/webauthn/authenticate.
 *
 * It generates and returns authentication options.
 */
async function WebauthnAuthenticate(req: NextRequest) {
	const email = req.nextUrl.searchParams.get("email");

	if (!email) {
		return NextResponse.json(
			{ message: "Email is required." },
			{ status: 400 }
		);
	}

	const credentials = await getCredentialsForUser(email);
	const options = await generateAuthenticationOptions({
		userVerification: "preferred",
	});

	options.allowCredentials = credentials.map(c => ({
		id: c.credentialIdBase64,
		type: "public-key",
		transports: c.transports,
	}));
	try {
		await saveChallenge({
			userId: credentials[0].userId,
			challenge: options.challenge,
		});
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ message: "Could not set up challenge." },
			{ status: 500 }
		);
	}
	return NextResponse.json(options);
}

export { WebauthnAuthenticate as GET };
