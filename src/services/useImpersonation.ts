import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";
import { useMemo } from "react";

export function useImpersonation() {
	const queryClient = useQueryClient();
	const session = useSession();
	const endImpersonation = useMutation({
		mutationFn: async () => {
			await signIn("credentials", {
				mode: "endImpersonation",
				redirect: false,
			});
			queryClient.clear();
		},
	});
	const isImpersonating = useMemo(
		() => Boolean(session.data?.user.impersonatedBy),
		[session.data?.user.impersonatedBy]
	);

	const impersonate = useMutation({
		mutationFn: async (user: { id: string; email: string }) => {
			await signIn("credentials", {
				mode: "impersonate",
				id: user.id,
				email: user.email,
				redirect: false,
			});
			queryClient.clear();
		},
	});

	return {
		endImpersonation,
		isImpersonating,
		impersonate,
	};
}
