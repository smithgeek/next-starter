declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_GRAPHQL_URL: string;
		NEXT_PUBLIC_API_URL: string;
		NEXT_PUBLIC_APP_NAME: string;
		NEXT_PUBLIC_LOAD_LOCAL_DEVTOOLS: boolean;
		API_GRAPHQL_URL: string;
		HASURA_JWT_SECRET: string;
	}
}
