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

const devToolTabs: { [tabName: string]: JSX.Element } = {
	Main: <MainTools />,
	Theme: <ThemeTools />,
};

if (process.env.NEXT_PUBLIC_LOAD_LOCAL_DEVTOOLS) {
	devToolTabs["Local"] = <LocalDevTools />;
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
			<Sheet
				modal={false}
				open={devToolsState.panel?.open}
				onOpenChange={open => {
					devToolsState.update(s => {
						s.panel ??= {};
						s.panel.open = open;
					});
				}}
			>
				<SheetTrigger className="fixed bottom-4 right-20" asChild>
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
							{Object.keys(devToolTabs).map(key => (
								<TabsTrigger key={key} value={key}>
									{key}
								</TabsTrigger>
							))}
						</TabsList>
						<div className="p-2">
							<ScrollArea className="h-[40vh]" key={tab}>
								<ErrorBoundary
									key={tab}
									fallback={<>Error rendering tab</>}
								>
									<>
										{Object.keys(devToolTabs).map(key => {
											return (
												<TabsContent
													key={key}
													value={key}
												>
													{devToolTabs[key]}
												</TabsContent>
											);
										})}
									</>
								</ErrorBoundary>
							</ScrollArea>
						</div>
					</Tabs>
				</SheetContent>
			</Sheet>
		</>
	);
}
