import { useDevToolsState } from "./DevToolsContext";

export function ScreenSize() {
	const [state] = useDevToolsState();

	if (!state.showScreenSize) {
		return null;
	}
	return (
		<div
			className="absolute bottom-0 left-0 bg-slate-950 p-2  rounded-lg opacity-80"
			style={{ zIndex: 100000 }}
		>
			<div className="block sm:hidden">xs</div>
			<div className="hidden sm:block md:hidden">sm</div>
			<div className="hidden md:block lg:hidden">md</div>
			<div className="hidden lg:block xl:hidden">lg</div>
			<div className="hidden xl:block 2xl:hidden">xl</div>
			<div className="hidden 2xl:block">2xl</div>
		</div>
	);
}
