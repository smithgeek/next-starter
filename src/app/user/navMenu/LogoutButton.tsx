import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut as nextAuthSignout } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavButton } from "./NavLinkButton";

export function LogoutButton() {
	const [signingOut, setSigningOut] = useState(false);
	const router = useRouter();
	const signOut = useMutation({
		mutationFn: async () => {
			setSigningOut(true);
			await nextAuthSignout();
			await router.push("/");
		},
	});

	return (
		<NavButton busy={signingOut} className="justify-start gap-2 font-bold my-2" onClick={() => signOut.mutate()}>
			<LogOut />
			<span>Logout</span>
		</NavButton>
	);
}
