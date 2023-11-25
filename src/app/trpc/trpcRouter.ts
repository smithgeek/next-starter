import { getPricingData } from "../pricing/stripe";
import { procedure, router } from "./server";

export const trpcRouter = router({
	getPricing: procedure.query(async () => {
		return await getPricingData();
	}),
});
// This type will be used as a reference later...
export type TrpcRouter = typeof trpcRouter;
