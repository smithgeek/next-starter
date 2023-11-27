import { NavigationContent } from "./NavigationContent";
import { NavigationHeader } from "./NavigationHeader";

export function NavMenu({ className, style }: { className?: string; style?: React.CSSProperties }) {
	return (
		<div style={style} className={className}>
			<NavigationHeader />
			<NavigationContent />
		</div>
	);
}
