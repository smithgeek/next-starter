import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY);

async function getProducts() {
	const products = await stripe.products.search({
		query: `active: 'true' AND metadata['pricing_table']:'true'`,
		expand: ["data.default_price"],
	});
	return products.data;
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
