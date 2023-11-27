import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useDevToolsStore } from "./DevToolsContext";

export function MainTools() {
	const { showScreenSize, update } = useDevToolsStore();
	return (
		<>
			<div className="flex items-center space-x-2">
				<Switch
					id="show-screen-size"
					checked={showScreenSize}
					onCheckedChange={v =>
						update(s => {
							s.showScreenSize = v;
						})
					}
				/>
				<Label htmlFor="show-screen-size">Show Screen Size</Label>
			</div>
		</>
	);
}
