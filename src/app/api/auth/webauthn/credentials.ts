import { AuthenticatorTransportFuture } from "@simplewebauthn/typescript-types";
import { apiSdk } from "graphql/api/operations";

export interface DbCredential {
	credentialId: string;
	userId: string;
	transports: AuthenticatorTransportFuture[];
	credentialPublicKey: Buffer;
	counter: number;
}

export async function getCredentialsForUser(
	email: string
): Promise<DbCredential[]> {
	const response = await apiSdk.GetWebauthnCredentialsForUser({ email });
	return response.webauthn_credentials.map<DbCredential>(credential => ({
		counter: credential.counter,
		credentialId: credential.credential_id,
		credentialPublicKey: credential.public_key,
		transports: credential.transports as AuthenticatorTransportFuture[],
		userId: credential.user_id,
	}));
}

export async function getCredentialById(
	id: string
): Promise<DbCredential | null> {
	const response = await apiSdk.GetWebauthnCredentialsById({ id });
	if (!response.webauthn_credentials_by_pk) {
		return null;
	}
	return {
		credentialId: response.webauthn_credentials_by_pk.credential_id,
		counter: response.webauthn_credentials_by_pk.counter,
		transports: response.webauthn_credentials_by_pk
			.transports as AuthenticatorTransportFuture[],
		userId: response.webauthn_credentials_by_pk.user_id,
		credentialPublicKey: Buffer.from(
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
	credentialId: string;
	counter: number;
	userId: string;
	key: Uint8Array;
}) {
	const stringKey = Buffer.from(
		new TextDecoder().decode(cred.key),
		"base64"
	).toString();
	console.log(stringKey);
	await apiSdk.SaveWebauthnCredentials({
		counter: cred.counter,
		credentialId: cred.credentialId,
		publicKey: stringKey,
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
