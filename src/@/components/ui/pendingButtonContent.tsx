import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

export function PendingButtonContent({
	children,
	pending,
}: {
	children: ReactNode;
	pending: boolean;
}) {
	return (
		<div className="relative">
			<Loader2
				className={cn("animate-spin mr-2 absolute mx-auto w-full", {
					invisible: !pending,
				})}
			/>
			<span
				className={cn({
					"opacity-30": pending,
				})}
			>
				{children}
			</span>
		</div>
	);
}
