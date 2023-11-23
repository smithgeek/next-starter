import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Filter } from "./dataTable/Filter";
import { SortIcon } from "./dataTable/SortIcon";
import { TableFooter } from "./dataTable/TableFooter";
import { GuessSpec, guessColumnDefinitions } from "./dataTable/guess";

type DataTableProps<TData, TValue> =
	| {
			columnDefinitions: ColumnDef<TData, TValue>[];
			data: TData[];
			guessColumns?: never;
	  }
	| {
			guessColumns: GuessSpec<TData, TValue> | boolean;
			data: TData[];
			columnDefinitions?: never;
	  };

export function DataTable<TData, TValue>({ columnDefinitions, data, guessColumns }: DataTableProps<TData, TValue>) {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

	const columns = columnDefinitions ?? guessColumnDefinitions(data, typeof guessColumns === "boolean" ? undefined : guessColumns);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			columnFilters,
			sorting,
			columnVisibility,
		},
	});

	return (
		<div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											<div className="flex gap-1 items-center">
												{header.isPlaceholder
													? null
													: flexRender(header.column.columnDef.header, header.getContext())}
												{header.column.getCanSort() && (
													<Button variant="ghost" size="icon" onClick={() => header.column.toggleSorting()}>
														<SortIcon column={header.column} />
													</Button>
												)}
												{header.column.getCanFilter() && <Filter column={header.column} />}
											</div>
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<TableFooter table={table} />
		</div>
	);
}
