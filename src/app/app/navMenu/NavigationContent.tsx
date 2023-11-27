import { FeatureId } from "@/app/features/Feature";
import { RequireFeature } from "@/app/features/RequireFeature";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Shield, UsersRound } from "lucide-react";
import { ReactNode } from "react";
import { BillingButton } from "./BillingButton";
import { LogoutButton } from "./LogoutButton";
import { NavLinkButton } from "./NavLinkButton";

function NavHeading({ children }: { children: ReactNode }) {
	return <Label className="text-muted-foreground m-2 text-sm">{children}</Label>;
}

export function NavigationContent({ className, style }: { className?: string; style?: React.CSSProperties }) {
	return (
		<div className={cn(className, "flex-1 flex flex-col")} style={style}>
			<NavLinkButton href="/app/dashboard">
				<LayoutDashboard />
				Dashboard
			</NavLinkButton>
			<RequireFeature feature={FeatureId.TenantAdmin}>
				<Separator />
				<NavHeading>Admin</NavHeading>
				<NavLinkButton href="/app/admin/users">
					<UsersRound /> Users
				</NavLinkButton>
				<BillingButton />
			</RequireFeature>
			<RequireFeature feature={FeatureId.SiteAdmin}>
				<Separator />
				<NavHeading>Site Settings</NavHeading>
				<NavLinkButton href="/app/siteAdmin">
					<Shield />
					Admin
				</NavLinkButton>
			</RequireFeature>
			<div className="flex-1"></div>
			<div className="flex items-center justify-between gap-2">
				<LogoutButton />
				<ThemeToggle />
			</div>
		</div>
	);
}
