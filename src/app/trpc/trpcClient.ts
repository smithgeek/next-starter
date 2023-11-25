import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { TrpcRouter } from "./trpcRouter";
export const trpcClient = createTRPCProxyClient<TrpcRouter>({
	links: [
		httpBatchLink({
			url: `${process.env.NEXT_PUBLIC_APP_ORIGIN}/trpc`,
		}),
	],
});
