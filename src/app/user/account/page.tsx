import { Metadata } from "next";
import { Features } from "./Features";
import { Passkeys } from "./Passkeys";

export default function AccountPage() {
	return (
		<>
			<Passkeys />
			<Features />
		</>
	);
}

export const metadata: Metadata = {
	title: "Account",
};
