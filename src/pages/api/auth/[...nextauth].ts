//import { HasuraAdapter } from "@auth/hasura-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	// adapter: HasuraAdapter({
	// 	endpoint: "<Hasura-GraphQL-endpoint>",
	// 	adminSecret: "<admin-secret>",
	// }),
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: "Username" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				// const authResponse = await fetch("/users/login", {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 	},
				// 	body: JSON.stringify(credentials),
				// });

				// if (!authResponse.ok) {
				// 	return null;
				// }

				// const user = await authResponse.json();

				// return user;
				return {
					id: "1",
					email: credentials?.username,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token = Object.assign({}, token, {
					access_token: account.access_token,
				});
			}
			return token;
		},
		async session({ session, token }) {
			if (session) {
				session = Object.assign({}, session, {
					access_token: token.access_token,
				});
			}
			session.user.role = "admin";
			return session;
		},
	},
});
