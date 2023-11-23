import { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			token?: string;
			id?: string;
			impersonatedBy?: {
				id: string;
				email: string;
			};
		} & DefaultSession["user"];
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		idToken?: string;
		impersonatedBy?: {
			id: string;
			email: string;
		};
	}
}
