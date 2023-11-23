import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Input } from "../input";

function BoolFilter<TData, TValue>({ column }: { column: Column<TData, TValue> }) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Checkbox
					id={`filter-${column.id}-true`}
					checked={Boolean(column.getFilterValue())}
					onCheckedChange={() => column.setFilterValue(true)}
				/>
				<Label htmlFor={`filter-${column.id}-true`}>True</Label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox
					id={`filter-${column.id}-true`}
					checked={column.getFilterValue() === false}
					onCheckedChange={() => column.setFilterValue(false)}
				/>
				<Label htmlFor={`filter-${column.id}-false`}>False</Label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox
					id={`filter-${column.id}-true`}
					checked={column.getFilterValue() === undefined}
					onCheckedChange={() => column.setFilterValue(undefined)}
				/>
				<Label htmlFor={`filter-${column.id}-any`}>Any</Label>
			</div>
		</div>
	);
}

export function Filter<TData, TValue>({ column }: { column: Column<TData, TValue> }) {
	return (
		<Popover>
			<PopoverTrigger>
				<Search
					className={cn("h-4 w-4", {
						"text-primary": column.getIsFiltered(),
					})}
				/>
			</PopoverTrigger>
			<PopoverContent>
				{column.columnDef.meta?.type === "boolean" ? (
					<BoolFilter column={column} />
				) : (
					<div className="flex items-center py-4">
						<Input
							placeholder="Filter..."
							value={(column.getFilterValue() as string) ?? ""}
							onValueChange={(value) => column.setFilterValue(value)}
							className="max-w-sm"
						/>
					</div>
				)}
			</PopoverContent>
		</Popover>
	);
}
