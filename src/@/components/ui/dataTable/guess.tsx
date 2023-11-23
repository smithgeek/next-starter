import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

function camelCaseToWords(s: string) {
	const result = s.replace(/([A-Z])/g, " $1");
	return result.charAt(0).toUpperCase() + result.slice(1);
}

export interface GuessSpec<TData, TValue> {
	columns?: {
		[key in keyof Partial<TData>]: {
			type?: "boolean";
		};
	};
	extraColumns?: ColumnDef<TData, TValue>[];
}

export function guessColumnDefinitions<TData, TValue>(data: TData[], spec?: GuessSpec<TData, TValue>): ColumnDef<TData, TValue>[] {
	if (data.length < 1) {
		return [];
	}
	const firstItem = data[0];
	if (firstItem === null || typeof firstItem !== "object") {
		return [];
	}

	let columns: ColumnDef<TData, TValue>[] = [];
	const keys = Object.keys(firstItem) as (keyof TData)[];
	for (const key of keys) {
		let def: ColumnDef<TData, TValue> = {
			accessorKey: key,
			header: camelCaseToWords(key.toString()),
		};
		const colSpec = spec?.columns && key in spec?.columns ? spec.columns[key] : undefined;
		const dataType = typeof firstItem[key];
		if (dataType === "boolean" || colSpec?.type === "boolean") {
			def.cell = ({ row }) => {
				return <Checkbox checked={Boolean(row.getValue(key.toString()))} className="cursor-default" />;
			};
			def.meta = {
				type: "boolean",
			};
			def.filterFn = (row, id, value) => {
				return Boolean(row.getValue(id) as any) === value;
			};
		}
		columns.push(def);
	}
	return columns.concat(spec?.extraColumns ?? []);
}