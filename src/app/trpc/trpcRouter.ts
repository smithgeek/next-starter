import { stripeRouter } from "./functions/pricing/stripe";
import { tenantAdminRouter } from "./functions/tenantAdmin/AddUserTenantFeature";
import { router } from "./server";

export const trpcRouter = router({
	stripe: stripeRouter,
	tenantAdmin: tenantAdminRouter,
});
// This type will be used as a reference later...
export type TrpcRouter = typeof trpcRouter;
