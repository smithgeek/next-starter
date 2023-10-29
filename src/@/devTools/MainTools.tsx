import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useDevToolsState } from "./DevToolsContext";

export function MainTools() {
	const [state, setState] = useDevToolsState();
	return (
		<>
			<div className="flex items-center space-x-2">
				<Switch
					id="show-screen-size"
					checked={state.showScreenSize}
					onCheckedChange={v =>
						setState({
							...state,
							showScreenSize: v,
						})
					}
				/>
				<Label htmlFor="show-screen-size">Show Screen Size</Label>
			</div>
		</>
	);
}
