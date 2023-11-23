import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userClient } from "graphql/User/hooks";
import { AlertTriangle } from "lucide-react";
import { signIn } from "next-auth/react";

export function ImpersonationBanner() {
	const queryClient = useQueryClient();
	const endImpersonation = useMutation({
		mutationFn: async () => {
			await signIn("credentials", {
				mode: "endImpersonation",
				redirect: false,
			});
			await queryClient.invalidateQueries();
		},
	});

	const currentUserQuery = userClient.useCurrentUser();
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
