"use client";
import { startAuthentication } from "@simplewebauthn/browser";
import { PublicKeyCredentialRequestOptionsJSON } from "@simplewebauthn/typescript-types";
import { signIn } from "next-auth/react";

export async function signInWithWebauthn(email: string | undefined | null) {
	if (!email) {
		return;
	}
	const url = new URL(
		`/api/auth/webauthn/authenticate`,
		window.location.origin
	);
	url.search = new URLSearchParams({ email }).toString();
	const optionsResponse = await fetch(url.toString());

	if (optionsResponse.status !== 200) {
		throw new Error("Could not get authentication options from server");
	}
	const opt: PublicKeyCredentialRequestOptionsJSON =
		await optionsResponse.json();

	if (!opt.allowCredentials || opt.allowCredentials.length === 0) {
		throw new Error("There is no registered credential.");
	}

	const credential = await startAuthentication(opt);

	await signIn("credentials", {
		id: credential.id,
		rawId: credential.rawId,
		type: credential.type,
		clientDataJSON: credential.response.clientDataJSON,
		authenticatorData: credential.response.authenticatorData,
		signature: credential.response.signature,
		userHandle: credential.response.userHandle,
	});
}
