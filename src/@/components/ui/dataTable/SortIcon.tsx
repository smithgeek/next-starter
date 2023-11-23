import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export function SortIcon({ column }: { column: Column<any, any> }) {
	const commonClasses = "h-4 w-4";
	if (column.getIsSorted()) {
		if (column.getNextSortingOrder() === "desc") {
			return <ArrowUp className={cn("text-primary", commonClasses)} />;
		} else {
			return <ArrowDown className={cn("text-primary", commonClasses)} />;
		}
	}
	return <ArrowUpDown className={commonClasses} />;
}
