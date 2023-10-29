import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VenetianMask } from "lucide-react";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { DevToolsContextProvider, DevToolsState } from "./DevToolsContext";
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
	const [devToolsState, setDevToolsState] = useState<DevToolsState>(
		loadStateFromLocalStorage()
	);
	const setState = useCallback(
		(state: DevToolsState) => {
			setDevToolsState(state);
			localStorage.setItem("devToolsState", JSON.stringify(state));
		},
		[setDevToolsState]
	);
	const [tab, setTab] = useState("main");
	return (
		<DevToolsContextProvider value={{ state: devToolsState, setState }}>
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
							onValueChange={setTab}
						>
							<TabsList className="w-full justify-start rounded-none">
								<TabsTrigger value="main">Main</TabsTrigger>
								{process.env
									.NEXT_PUBLIC_LOAD_LOCAL_DEVTOOLS && (
									<TabsTrigger value="local">
										Local
									</TabsTrigger>
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
		</DevToolsContextProvider>
	);
}
