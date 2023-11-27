import { trpcClient } from "@/app/trpc/trpcClient";
import { useMutation } from "@tanstack/react-query";
import { CircleDollarSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { NavButton } from "./NavLinkButton";

export function BillingButton() {
	const router = useRouter();
	const [navigating, setNavigating] = useState(false);
	const goToStripe = useMutation({
		mutationFn: async () => {
			setNavigating(true);
			const url = await trpcClient.getBillingPortalUrl.query({ returnUrl: location.href });
			if (url) {
				await router.push(url);
			} else {
				toast("Unable to load billing portal", { type: "error" });
				setNavigating(false);
			}
		},
	});
	return (
		<NavButton onClick={() => goToStripe.mutate()} busy={goToStripe.isPending || navigating}>
			<CircleDollarSign />
			Billing
		</NavButton>
	);
}
