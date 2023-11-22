import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

export function PendingButtonContent({
	children,
	pending,
	className,
	containerClassName,
}: {
	children: ReactNode;
	pending: boolean;
	className?: string;
	containerClassName?: string;
}) {
	return (
		<div className={cn("relative", containerClassName)}>
			<Loader2
				className={cn("animate-spin mr-2 absolute mx-auto w-full", {
					invisible: !pending,
				})}
			/>
			<span
				className={cn(
					{
						"opacity-30": pending,
					},
					className
				)}
			>
				{children}
			</span>
		</div>
	);
}
