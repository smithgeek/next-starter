import { startRegistration } from "@simplewebauthn/browser";

export async function registerWebauthn(): Promise<
	| {
			success: true;
			message?: never;
	  }
	| { success: false; message: string }
> {
	const optionsResponse = await fetch("/auth/webauthn/register");
	if (optionsResponse.status !== 200) {
		return {
			success: false,
			message: "Could not get registration options from server",
		};
	}
	const opt = await optionsResponse.json();

	try {
		const credential = await startRegistration(opt);

		const response = await fetch("/auth/webauthn/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credential),
			credentials: "include",
		});
		if (response.status != 201) {
			return {
				success: false,
				message: "Could not register webauthn credentials.",
			};
		} else {
			return {
				success: true,
			};
		}
	} catch (err) {
		return {
			success: false,
			message: `Registration failed. ${(err as Error).message}`,
		};
	}
}
