"use client";
import { NavPage } from "@/components/Layouts/NavPage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Head from "next/head";

export function DashboardPage() {
	const session = useSession();

	return (
		<NavPage>
			<>
				<Head>
					<title>Dashboard</title>
				</Head>
				<div>
					Logged in as user {session.data?.user.email} (
					{session.data?.user.role})
				</div>
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
			</>
		</NavPage>
	);
}
