/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p style={{fontWeight: "normal"}}>Official <a href="https://hasura.io/">Hasura</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://hasura.io/">
 *   <img style={{display: "block"}} src="/img/adapters/hasura.svg" width="38" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/hasura-adapter
 * ```
 *
 * @module @auth/hasura-adapter
 */

import type { Adapter } from "@auth/core/adapters";

import { apiSdk } from "graphql/api/operations.js";

/**
 *
 * ## Setup
 *
 * 1. Create the Auth.js schema in your database using SQL.
 *
 *   ```sql
 *   CREATE TABLE accounts (
 *       id uuid DEFAULT gen_random_uuid() NOT NULL,
 *       type text NOT NULL,
 *       provider text NOT NULL,
 *       "providerAccountId" text NOT NULL,
 *       refresh_token text,
 *       access_token text,
 *       expires_at integer,
 *       token_type text,
 *       scope text,
 *       id_token text,
 *       session_state text,
 *       "userId" uuid NOT NULL
 *   );
 *
 *   CREATE TABLE sessions (
 *       id uuid DEFAULT gen_random_uuid() NOT NULL,
 *       "sessionToken" text NOT NULL,
 *       "userId" uuid NOT NULL,
 *       expires timestamptz NOT NULL
 *   );
 *
 *   CREATE TABLE users (
 *       id uuid DEFAULT gen_random_uuid() NOT NULL,
 *       name text,
 *       email text NOT NULL,
 *       "emailVerified" timestamptz,
 *       image text
 *   );
 *
 *   CREATE TABLE verification_tokens (
 *       token text NOT NULL,
 *       identifier text NOT NULL,
 *       expires timestamptz NOT NULL
 *   );
 *
 *   CREATE TABLE provider_type (
 *       value text NOT NULL
 *   );
 *
 *   ALTER TABLE ONLY accounts
 *       ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 *
 *   ALTER TABLE ONLY sessions
 *       ADD CONSTRAINT sessions_pkey PRIMARY KEY ("sessionToken");
 *
 *   ALTER TABLE ONLY users
 *       ADD CONSTRAINT users_email_key UNIQUE (email);
 *
 *   ALTER TABLE ONLY users
 *       ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 *
 *   ALTER TABLE ONLY verification_tokens
 *       ADD CONSTRAINT verification_tokens_pkey PRIMARY KEY (token);
 *
 *   ALTER TABLE ONLY provider_type
 *       ADD CONSTRAINT provider_type_pkey PRIMARY KEY (value);
 *
 *   ALTER TABLE ONLY accounts
 *       ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
 *
 *   ALTER TABLE ONLY sessions
 *       ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
 *
 *   INSERT INTO provider_type (value) VALUES ('credentials'), ('email'), ('oauth'), ('oidc');
 *
 *   ALTER TABLE ONLY accounts
 *       ADD CONSTRAINT "accounts_type_fkey" FOREIGN KEY ("type") REFERENCES public.provider_type(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
 *   ```
 *
 * :::info
 * Tips: [Track all the tables and relationships in Hasura](https://hasura.io/docs/latest/schema/postgres/using-existing-database/#step-1-track-tablesviews)
 * :::
 *
 * 2. Add the adapter to your `pages/api/[...nextauth].ts` next-auth configuration object.
 *
 *   ```javascript title="pages/api/auth/[...nextauth].js"
 *   import NextAuth from "next-auth"
 *   import { HasuraAdapter } from "@auth/hasura-adapter"
 *
 *   export default NextAuth({
 *     adapter: HasuraAdapter({
 *       endpoint: "<Hasura-GraphQL-endpoint>",
 *       adminSecret: "<admin-secret>",
 *     }),
 *   ...
 *   })
 *   ```
 */
export function HasuraAdapter(): Adapter {
	return {
		async createUser(newUser) {
			const response = await apiSdk.NextAuthHasura_CreateUser({
				data: {
					...newUser,
				},
			});
			return response.insert_users_one!;
		},
		async getUser(id) {
			return (await apiSdk.NextAuthHasura_GetUser({ id })).users_by_pk;
		},
		async getUserByEmail(email) {
			return (await apiSdk.NextAuthHasura_GetUsers({ where: { email: { _eq: email } } })).users[0];
		},
		async getUserByAccount({ providerAccountId, provider }) {
			return (
				await apiSdk.NextAuthHasura_GetUsers({
					where: { accounts: { provider: { _eq: provider }, providerAccountId: { _eq: providerAccountId } } },
				})
			).users[0];
		},
		async updateUser({ id, ...data }) {
			return (await apiSdk.NextAuthHasura_UpdateUser({ id, data })).update_users_by_pk!;
		},
		async deleteUser(id) {
			return (await apiSdk.NextAuthHasura_DeleteUser({ id })).delete_users_by_pk;
		},
		async createSession(data) {
			return (await apiSdk.NextAuthHasura_CreateSession({ data })).insert_sessions_one!;
		},
		async getSessionAndUser(sessionToken) {
			const sessionAndUser = (await apiSdk.NextAuthHasura_GetSessionAndUser({ sessionToken })).sessions[0];
			if (!sessionAndUser) return null;

			const { user, ...session } = sessionAndUser;

			return {
				session,
				user,
			};
		},
		async updateSession({ sessionToken, ...data }) {
			return (await apiSdk.NextAuthHasura_UpdateSession({ sessionToken, data })).update_sessions?.returning?.[0];
		},
		async deleteSession(sessionToken) {
			return (await apiSdk.NextAuthHasura_DeleteSession({ sessionToken })).delete_sessions?.returning?.[0];
		},
		async linkAccount(data) {
			await apiSdk.NextAuthHasura_CreateAccount({ data });
		},
		async unlinkAccount(params) {
			await apiSdk.NextAuthHasura_DeleteAccount(params);
		},
		async createVerificationToken(data) {
			return (await apiSdk.NextAuthHasura_CreateVerificationToken({ data })).insert_verification_tokens_one;
		},
		async useVerificationToken(params) {
			return (await apiSdk.NextAuthHasura_DeleteVerificationToken(params)).delete_verification_tokens?.returning?.[0] ?? null;
		},
	};
}
