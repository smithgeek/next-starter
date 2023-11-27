import { cn } from "@/lib/utils";
import { ImpersonationBanner } from "../ImpersonationBanner";
import { NavigationContent } from "./NavigationContent";
import { NavigationHeader } from "./NavigationHeader";

export function NavMenu({ className, style }: { className?: string; style?: React.CSSProperties }) {
	return (
		<div style={style} className={cn(className, "flex-col")}>
			<ImpersonationBanner />
			<NavigationHeader className="p-2" />
			<NavigationContent className="p-2" />
		</div>
	);
}
