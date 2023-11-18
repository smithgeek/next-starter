import { startRegistration } from "@simplewebauthn/browser";

export async function registerWebauthn() {
	const optionsResponse = await fetch("/auth/webauthn/register");
	if (optionsResponse.status !== 200) {
		alert("Could not get registration options from server");
		return;
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
			alert("Could not register webauthn credentials.");
		} else {
			alert("Your webauthn credentials have been registered.");
		}
	} catch (err) {
		alert(`Registration failed. ${(err as Error).message}`);
	}
}
