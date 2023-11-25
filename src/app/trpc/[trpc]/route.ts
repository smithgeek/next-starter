import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { trpcRouter } from "../trpcRouter";

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: "/trpc",
		req,
		router: trpcRouter,
		createContext: () => ({}),
	});

export { handler as GET, handler as POST };
