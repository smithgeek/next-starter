import { getSession } from "next-auth/react";

export async function addAuthorizationHeader(headers: {
	[key: string]: string;
}) {
	const session = await getSession({});
	if (session?.user.token) {
		headers["Authorization"] = `Bearer ${session?.user.token}`;
	}
	return headers;
}

export const fetchRequester = (role: string) => {
	return async <TResult, TVariables>(
		doc: string,
		variables: TVariables
	): Promise<TResult> => {
		let headers: any = {
			"Content-Type": "application/json",
		};
		if (role !== "anonymous") {
			headers = await addAuthorizationHeader(headers);
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
};
