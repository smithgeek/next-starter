import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

export function PendingButtonContent({
	children,
	pending,
	className,
}: {
	children: ReactNode;
	pending: boolean;
	className?: string;
}) {
	return (
		<>
			<div className="absolute w-full flex justify-center items-center h-full">
				<Loader2
					className={cn("animate-spin mr-2", {
						invisible: !pending,
					})}
				/>
			</div>
			<div
				className={cn(
					{
						"opacity-30": pending,
					},
					className
				)}
			>
				{children}
			</div>
		</>
	);
}
