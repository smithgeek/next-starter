import { apiSdk } from "graphql/api/operations";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { authOptions } from "../auth/[...nextauth]/authOptions";
const stripe = new Stripe(process.env.STRIPE_KEY);

async function getProducts() {
	const products = await stripe.products.search({
		query: `active: 'true' AND metadata['pricing_table']:'true'`,
		expand: ["data.default_price"],
	});
	return products.data;
}

export async function getBillingPortalUrl(returnUrl: string) {
	const session = await getServerSession(authOptions);
	const response = await apiSdk.GetStripeCustomerId({ tenantId: session?.user.tenants.active });
	if (response.tenant_by_pk?.stripe_customer_id) {
		const stripeSession = await stripe.billingPortal.sessions.create({
			customer: response.tenant_by_pk.stripe_customer_id,
			return_url: returnUrl,
		});
		return stripeSession.url;
	}
}

function getPrice(price: string | Stripe.Price | null | undefined) {
	if (price && typeof price !== "string") {
		return {
			unitAmount: price.unit_amount,
			type: price.type,
			recurring: price.recurring,
		};
	}
	return null;
}

export async function getPricingData() {
	const products = await getProducts();
	return products.map((product) => ({
		name: product.name,
		price: getPrice(product.default_price),
		features: product.features,
	}));
}
