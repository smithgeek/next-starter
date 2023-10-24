import { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			token?: string;
			id?: string;
			role?: string;
		} & DefaultSession["user"];
	}
}
