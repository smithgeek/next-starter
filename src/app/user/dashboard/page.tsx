import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { PricingTable } from "./PricingTable";
import { UserInfo } from "./UserInfo";
import { DashboardTabs } from "./tabs";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function DashboardPage() {
	return (
		<>
			<UserInfo />
			<DashboardTabs />
			<div className="flex flex-col gap-2">
				<div className={cn("flex gap-2 flex-col")}>
					<Button variant="default">Default</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="destructive">destructive</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
					<Button variant="outline">Outline</Button>
				</div>
			</div>
			<PricingTable />
		</>
	);
}
