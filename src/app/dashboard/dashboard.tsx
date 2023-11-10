"use client";
import { NavPage } from "@/components/Layouts/NavPage";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryParamForceSync } from "@/lib/hooks/useQueryParamForceSync";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { StringParam, withDefault } from "use-query-params";

export function DashboardPage() {
	const session = useSession();
	const [tab, setTab] = useQueryParamForceSync(
		"tab",
		withDefault(StringParam, "one")
	);
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
				<Tabs value={tab} onValueChange={setTab}>
					<TabsList>
						<TabsTrigger value="one">One</TabsTrigger>
						<TabsTrigger value="two">Two</TabsTrigger>
						<TabsTrigger value="three">Three</TabsTrigger>
					</TabsList>
					<TabsContent value="one">One</TabsContent>
					<TabsContent value="two">Two</TabsContent>
					<TabsContent value="three">Three</TabsContent>
				</Tabs>
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
