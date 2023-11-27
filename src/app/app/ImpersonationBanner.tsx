import { Button } from "@/components/ui/button";
import { useImpersonation } from "@/services/useImpersonation";
import { userClient } from "graphql/User/hooks";
import { AlertTriangle } from "lucide-react";

export function ImpersonationBanner() {
	const { isImpersonating, endImpersonation } = useImpersonation();
	const currentUserQuery = userClient.useCurrentUser();

	if (!isImpersonating) {
		return null;
	}

	return (
		<div className="bg-orange-800 shadow-lg rounded-none mb-2 p-2 flex gap-4 items-center">
			<AlertTriangle />
			<span>
				You are impersonating{" "}
				{currentUserQuery.data?.name ?? currentUserQuery.data?.email}.
			</span>
			<Button
				onClick={() => endImpersonation.mutate()}
				busy={endImpersonation.isPending}
			>
				Stop
			</Button>
		</div>
	);
}
