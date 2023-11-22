import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export async function addAuthorizationHeader(
	token: string | null | undefined,
	headers: {
		[key: string]: string;
	}
) {
	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}
	return headers;
}

async function fetchHasuraJwt() {
	const response = await fetch("/auth/hasura/token");
	const json = await response.json();
	return json.token as string;
}

const hasuraJwtCacheKey = ["hasuraJwt"];

function useHasuraJwtQuery() {
	return useQuery({
		queryKey: hasuraJwtCacheKey,
		queryFn: fetchHasuraJwt,
		refetchInterval: 4 * 60 * 1000,
		refetchOnMount: false,
		refetchOnReconnect: true,
		refetchOnWindowFocus: false,
		gcTime: 5 * 60 * 1000,
		staleTime: 4 * 60 * 6000,
	});
}

export function useFetchRequester(role: string) {
	const jwtQuery = useHasuraJwtQuery();
	const queryclient = useQueryClient();

	async function getJwt() {
		if (jwtQuery.isSuccess && !jwtQuery.isStale) {
			return jwtQuery.data;
		}
		const token = await fetchHasuraJwt();
		queryclient.setQueryData(hasuraJwtCacheKey, token);
		return token;
	}
	useMutation({
		mutationFn: async () => {
			return "";
		},
	});
	return async <TResult, TVariables>(
		doc: string,
		variables: TVariables
	): Promise<TResult> => {
		let headers: any = {
			"Content-Type": "application/json",
		};
		if (role !== "anonymous") {
			const token = await getJwt();
			headers = await addAuthorizationHeader(token, headers);
			headers["x-hasura-role"] = role;
		}
		const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
			method: "POST",
			headers,
			body: JSON.stringify({
				query: doc,
				variables,
			}),
		});

		const json = await response.json();
		if (json.errors) {
			throw json;
		}
		return json.data;
	};
}
