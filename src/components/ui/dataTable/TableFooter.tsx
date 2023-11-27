import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table } from "@tanstack/react-table";

export function TableFooter<TData>({ table }: { table: Table<TData> }) {
	return (
		<div className="flex items-center justify-end space-x-2 py-4">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline" className="ml-auto">
						Columns
					</Button>
				</PopoverTrigger>
				<PopoverContent className="flex flex-col gap-2">
					{table
						.getAllColumns()
						.filter((column) => column.getCanHide())
						.map((column) => {
							return (
								<div key={column.id} className="flex gap-2 items-center">
									<Checkbox
										id={`column-${column.id}`}
										checked={column.getIsVisible()}
										onCheckedChange={(value) => column.toggleVisibility(!!value)}
									/>
									<Label htmlFor={`column-${column.id}`} className="capitalize">
										{column.id}
									</Label>
								</div>
							);
						})}
				</PopoverContent>
			</Popover>
			<Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
				Previous
			</Button>
			<Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
				Next
			</Button>
		</div>
	);
}
