import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VenetianMask } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDevToolsStore } from "./DevToolsContext";
import { MainTools } from "./MainTools";
import { ScreenSize } from "./ScreenSize";
import { ThemeTools } from "./ThemeTools";

const LocalDevTools = dynamic(
	() =>
		import(
			`${
				process.env.NEXT_PUBLIC_LOAD_LOCAL_DEVTOOLS
					? "./LocalDevTools"
					: "./NoLocalDevTools"
			}`
		),
	{
		loading: () => null,
	}
);

function loadStateFromLocalStorage() {
	const serializedState = localStorage.getItem("devToolsState");
	if (serializedState) {
		return JSON.parse(serializedState);
	}
	return {};
}

export default function DevToolsMain() {
	const [devToolsStoreLoaded, setDevToolsStoreLoaded] = useState(false);
	useEffect(() => {
		setDevToolsStoreLoaded(true);
	}, [setDevToolsStoreLoaded]);
	const devToolsState = useDevToolsStore();

	// delay loading to prevent hydration errors
	if (!devToolsStoreLoaded) {
		return null;
	}
	const tab = devToolsState.panel?.tab ?? "main";
	return (
		<>
			<ScreenSize />
			<Sheet modal={false}>
				<SheetTrigger className="absolute bottom-4 right-20">
					<Button style={{ zIndex: 100000 }} variant="ghost">
						<VenetianMask />
					</Button>
				</SheetTrigger>
				<SheetContent
					side="bottom"
					style={{ zIndex: 100001 }}
					onPointerDownOutside={e => {
						e.preventDefault();
					}}
					onInteractOutside={e => e.preventDefault()}
					className="p-0"
				>
					<Tabs
						value={tab}
						className="w-full"
						onValueChange={v => {
							devToolsState.update(s => {
								s.panel ??= {};
								s.panel.tab = v;
							});
						}}
					>
						<TabsList className="w-full justify-start rounded-none">
							<TabsTrigger value="main">Main</TabsTrigger>
							{process.env.NEXT_PUBLIC_LOAD_LOCAL_DEVTOOLS && (
								<TabsTrigger value="local">Local</TabsTrigger>
							)}
							<TabsTrigger value="theme">Theme</TabsTrigger>
						</TabsList>
						<div className="p-2">
							<ScrollArea className="h-[40vh]">
								<ErrorBoundary
									key={tab}
									fallback={<>Error rendering tab</>}
								>
									<TabsContent value="main">
										<MainTools />
									</TabsContent>
									<TabsContent value="local">
										<LocalDevTools />
									</TabsContent>
									<TabsContent value="theme">
										<ThemeTools />
									</TabsContent>
								</ErrorBoundary>
							</ScrollArea>
						</div>
					</Tabs>
				</SheetContent>
			</Sheet>
		</>
	);
}
