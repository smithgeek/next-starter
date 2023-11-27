import { useEffect } from "react";
import { useQueryParam } from "use-query-params";

type Params<T> = Parameters<typeof useQueryParam<T>>;
type Return<T> = ReturnType<typeof useQueryParam<T>>;

export function useQueryParamForceSync<T>(
	name: Params<T>[0],
	paramConfig?: Params<T>[1],
	options?: Params<T>[2]
): ReturnType<typeof useQueryParam<T>> {
	const [query, setQuery] = useQueryParam(name, paramConfig, options);

	useEffect(() => {
		setQuery(query);
	}, [query, setQuery]);

	return [query, setQuery];
}
