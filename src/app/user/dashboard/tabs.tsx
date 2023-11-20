"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryParamForceSync } from "@/lib/hooks/useQueryParamForceSync";
import { StringParam, withDefault } from "use-query-params";

export function DashboardTabs() {
	const [tab, setTab] = useQueryParamForceSync(
		"tab",
		withDefault(StringParam, "one")
	);
	return (
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
	);
}
