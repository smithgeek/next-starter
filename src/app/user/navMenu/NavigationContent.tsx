import { FeatureId } from "@/app/features/Feature";
import { RequireFeature } from "@/app/features/RequireFeature";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, Shield, User2 } from "lucide-react";
import { BillingButton } from "./BillingButton";
import { LogoutButton } from "./LogoutButton";
import { NavLinkButton } from "./NavLinkButton";

export function NavigationContent() {
	return (
		<>
			<NavLinkButton href="/user/dashboard">
				<LayoutDashboard />
				Dashboard
			</NavLinkButton>
			<NavLinkButton href="/user/account">
				<User2 />
				Account
			</NavLinkButton>
			<RequireFeature feature={FeatureId.TenantAdmin}>
				<BillingButton />
			</RequireFeature>
			<LogoutButton />
			<RequireFeature feature={FeatureId.SiteAdmin}>
				<Separator />
				<Label className="text-muted-foreground m-2 text-sm">Site Settings</Label>
				<NavLinkButton href="/user/admin">
					<Shield />
					Admin
				</NavLinkButton>
			</RequireFeature>
		</>
	);
}
