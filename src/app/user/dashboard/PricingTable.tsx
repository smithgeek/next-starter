"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/dataTable";
import { useQuery } from "@tanstack/react-query";
import { trpcClient } from "../../trpc/trpcClient";

export function PricingTable() {
	const prices = useQuery({
		queryKey: ["pricingTable"],
		queryFn: async () => {
			return await trpcClient.getPricing.query();
		},
	});
	if (!prices.data) {
		return null;
	}
	return (
		<>
			{prices.data.map((price) => (
				<div key={price.name}>
					<Card>
						<CardContent>
							<CardTitle>{price.name}</CardTitle>
							{price.features.map((feature) => (
								<div key={feature.name}>{feature.name}</div>
							))}
							<p>
								${(price.price?.unitAmount ?? 0) / 100} / {price.price?.recurring?.interval}
							</p>
						</CardContent>
					</Card>
				</div>
			))}
			<DataTable data={prices.data} guessColumns />
		</>
	);
}
