import { Button } from "@/components/ui/button";
import { PendingButtonContent } from "@/components/ui/pendingButtonContent";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { addAuthorizationHeader } from "graphql/FetchRequester";
import { LayoutDashboard, LogOut, Shield, User2 } from "lucide-react";
import {
	signOut as nextAuthSignout,
	signOut,
	useSession,
} from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { NavigationItem } from "./NavigationItem";

async function getBillingPortalUrl() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/billing/stripe/portal?returnUrl=${location.origin}/menus`,
		{
			headers: await addAuthorizationHeader("", {
				"Content-Type": "application/json",
			}),
		}
	);
	const json = await response.json();
	return json.url;
}

export async function redirectToStripeBilling() {
	const url = await getBillingPortalUrl();
	location.href = url;
}

export function useNavigationItems() {
	const session = useSession();
	const role = session.data?.user.role;
	const router = useRouter();
	const pathname = usePathname();
	const signOutAction = async () => {
		await signOut();
		await router.push("/");
	};
	const navItems: NavigationItem[] = [
		{
			text: "Dashboard",
			icon: <LayoutDashboard />,
			type: "link",
			active: pathname?.startsWith("/user/dashboard"),
			href: "/user/dashboard",
		},
		{
			text: "Account",
			icon: <User2 />,
			type: "link",
			active: pathname?.startsWith("/user/account"),
			href: "/user/account",
		},
	];
	if (role === "admin") {
		navItems.push({
			text: "Admin",
			icon: <Shield className="w-6" />,
			type: "link",
			href: "/admin",
			active: pathname?.startsWith("/admin"),
		});
	} else {
		navItems.push({
			text: "Billing",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			type: "text",
			onClick: redirectToStripeBilling,
		});
	}
	return navItems;
}

export function LogOutButton({ mode }: { mode: "side" | "bottom" }) {
	const [signingOut, setSigningOut] = useState(false);
	const router = useRouter();
	const signOut = useMutation({
		mutationFn: async () => {
			setSigningOut(true);
			await nextAuthSignout();
			await router.push("/");
		},
	});

	const button = (
		<Button
			variant={signingOut ? "secondary" : "ghost"}
			className={cn({
				"w-full justify-start gap-2 font-bold my-2": mode === "side",
				"text-center p-2 py-7 flex flex-col justify-center items-center cursor-pointer w-full":
					mode === "bottom",
			})}
			onClick={() => signOut.mutate()}
		>
			<PendingButtonContent
				pending={signingOut}
				className={cn("flex gap-1 items-center", {
					"flex-col justify-center": mode === "bottom",
				})}
			>
				<div>
					<LogOut />
				</div>
				<span className={cn({ "text-xs": mode === "bottom" })}>
					Logout
				</span>
			</PendingButtonContent>
		</Button>
	);
	if (mode === "side") {
		return button;
	}
	return <div>{button}</div>;
}
