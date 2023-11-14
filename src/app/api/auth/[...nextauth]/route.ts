import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

const domain = process.env.APP_DOMAIN!;
const origin = process.env.APP_ORIGIN!;

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST, authOptions };
