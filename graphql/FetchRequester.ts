import { getAuth } from "firebase/auth";

export async function getAuthorizationHeader() {
	const user = getAuth().currentUser;
	if (user) {
		const idToken = await user.getIdToken();
		return `Bearer ${idToken}`;
	}
	return "";
}

export const fetchRequester = async <TResult, TVariables>(
	doc: any,
	variables: TVariables,
): Promise<TResult> => {
	const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			"Authorization": await getAuthorizationHeader()
		},
		body: JSON.stringify({
			query: doc,
			variables
		})
	})

	const json = await response.json();
	return json.data;
}