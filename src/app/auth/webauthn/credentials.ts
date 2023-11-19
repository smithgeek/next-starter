import { AuthenticatorTransportFuture } from "@simplewebauthn/typescript-types";
import { apiSdk } from "graphql/api/operations";

export interface DbCredential {
	credentialId: Uint8Array;
	credentialIdBase64: string;
	userId: string;
	transports: AuthenticatorTransportFuture[];
	credentialPublicKey: Uint8Array;
	counter: number;
}

export async function getCredentialsForUser(
	email: string
): Promise<DbCredential[]> {
	const response = await apiSdk.GetWebauthnCredentialsForUser({ email });
	return response.webauthn_credentials.map<DbCredential>(credential => {
		return {
			counter: credential.counter,
			credentialId: new Uint8Array(
				Buffer.from(credential.credential_id, "base64")
			),
			credentialIdBase64: credential.credential_id,
			credentialPublicKey: hexStringToUint8Array(credential.public_key),
			transports: credential.transports as AuthenticatorTransportFuture[],
			userId: credential.user_id,
		};
	});
}

function hexStringToUint8Array(hex: string): Uint8Array {
	const matches = hex.substring(2).match(/.{1,2}/g);
	if (matches) {
		return Uint8Array.from(matches.map(byte => parseInt(byte, 16)));
	}
	return new Uint8Array();
}

function uint8ArrayToHex(data: Uint8Array) {
	return `\\x${Buffer.from(data).toString("hex")}`;
}

export async function getCredentialById(
	id: string
): Promise<DbCredential | null> {
	const response = await apiSdk.GetWebauthnCredentialsById({ id });
	if (!response.webauthn_credentials_by_pk) {
		return null;
	}
	return {
		credentialId: new Uint8Array(
			Buffer.from(
				response.webauthn_credentials_by_pk.credential_id,
				"base64"
			)
		),
		credentialIdBase64: response.webauthn_credentials_by_pk.credential_id,
		counter: response.webauthn_credentials_by_pk.counter,
		transports: response.webauthn_credentials_by_pk
			.transports as AuthenticatorTransportFuture[],
		userId: response.webauthn_credentials_by_pk.user_id,
		credentialPublicKey: hexStringToUint8Array(
			response.webauthn_credentials_by_pk.public_key
		),
	};
}

export async function saveChallenge({
	userId,
	challenge,
}: {
	challenge: string;
	userId: string;
}) {
	await apiSdk.SaveWebauthnCredentialsChallenge({ challenge, userId });
}

export async function getChallenge(userId: string): Promise<string | null> {
	const response = await apiSdk.GetWebauthnCredentialsChallenge({ userId });
	if (!response.webauthn_challenges_by_pk) {
		return null;
	}
	return response.webauthn_challenges_by_pk.challenge;
}

/**
 * saveCredentials stores the user's public key in the database.
 * @param cred user's public key
 */
export async function saveCredentials(cred: {
	transports: AuthenticatorTransportFuture[];
	credentialId: Uint8Array;
	counter: number;
	userId: string;
	key: Uint8Array;
}) {
	await apiSdk.SaveWebauthnCredentials({
		counter: cred.counter,
		credentialId: Buffer.from(cred.credentialId).toString("base64url"),
		public_key: uint8ArrayToHex(cred.key),
		transports: cred.transports,
		userId: cred.userId,
	});
}

export async function updateCredentialCounter(
	credentialId: string,
	counter: number
) {
	await apiSdk.UpdateWebauthnCredentialsCounter({
		counter,
		credentialId,
	});
}
