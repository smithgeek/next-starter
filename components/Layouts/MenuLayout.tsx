import { ReactNode } from "react";
import { useAuth } from "../../services/firebase/auth";
import { LogoutIcon } from "../Icons/LogoutIcon";
import { BottomNavigation } from "./BottomNavigation";
import { NavigationItem } from "./NavigationItem";
import { Sidebar } from "./Sidebar";

export function MenuLayout({ children }: { children: ReactNode }) {
	const { signOut } = useAuth();
	const navItems: NavigationItem[] = [
		{
			text: "Logout",
			type: "text",
			icon: <LogoutIcon />,
			onClick: signOut
		}
	]
	return <div>
		<div className="flex">
			<Sidebar header={{ title: "" }} items={navItems} className="hidden sm:block" />
			<div>
				{children}
			</div>
		</div>
		<BottomNavigation items={navItems} className="sm:hidden" />
	</div>
}