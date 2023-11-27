import { DefaultSession } from "next-auth";

export interface Tenants {
	allowed: string[];
	active: string;
}

declare module "next-auth" {
	interface Session {
		user: {
			token?: string;
			id?: string;
			tenants: Tenants;
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
