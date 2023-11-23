"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminClient } from "graphql/Admin/hooks";
import { signIn } from "next-auth/react";
import { Feature } from "../../features/Feature";
import { useRequireFeature } from "../../features/useFeatures";

export function AdminPage() {
	useRequireFeature(Feature.Admin, "/user/dashboard");
	const usersQuery = adminClient.useAllUsers();
	const queryClient = useQueryClient();
	const impersonate = useMutation({
		mutationFn: async (user: { id: string; email: string }) => {
			await signIn("credentials", {
				mode: "impersonate",
				id: user.id,
				email: user.email,
				redirect: false,
			});
			await queryClient.invalidateQueries();
		},
	});

	return (
		<>
			<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{usersQuery.data?.map(user => {
					return (
						<Card
							className="card bg-neutral shadow-xl m-4"
							key={user.id}
						>
							<CardHeader>
								<CardTitle>
									{user?.name ?? user.email}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-2">
								<Label className="text-muted-foreground">
									{user.email}
								</Label>

								<Button
									onClick={() => impersonate.mutate(user)}
									busy={
										impersonate.isPending &&
										impersonate.variables.id === user.id
									}
								>
									Impersonate
								</Button>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</>
	);
}
