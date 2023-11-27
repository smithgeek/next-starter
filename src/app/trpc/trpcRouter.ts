import { z } from "zod";
import { getBillingPortalUrl, getPricingData } from "../pricing/stripe";
import { procedure, router } from "./server";

export const trpcRouter = router({
	getPricing: procedure.query(async () => {
		return await getPricingData();
	}),
	getBillingPortalUrl: procedure.input(z.object({ returnUrl: z.string() })).query(async ({ input }) => {
		return await getBillingPortalUrl(input.returnUrl);
	}),
});
// This type will be used as a reference later...
export type TrpcRouter = typeof trpcRouter;
