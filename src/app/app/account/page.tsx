import { Metadata } from "next";
import { Passkeys } from "./Passkeys";

export default function AccountPage() {
	return (
		<>
			<Passkeys />
		</>
	);
}

export const metadata: Metadata = {
	title: "Account",
};
