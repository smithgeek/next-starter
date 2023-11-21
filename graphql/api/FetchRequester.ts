export function fetchRequester() {
	return async <TResult, TVariables>(
		doc: string,
		variables: TVariables
	): Promise<TResult> => {
		let headers: any = {
			"Content-Type": "application/json",
		};
		headers["X-Hasura-Admin-Secret"] = process.env.HASURA_ADMIN_PASSWORD;
		const response = await fetch(process.env.API_GRAPHQL_URL, {
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
