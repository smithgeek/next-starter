"use client";
import { FeatureId } from "@/app/features/Feature";
import { useRequireFeature } from "@/app/features/useFeatures";
import { trpcClient } from "@/app/trpc/trpcClient";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/dataTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { GetUsersQuery, useTenantAdminSdk } from "graphql/TenantAdmin/operations";
import { userClient } from "graphql/User/hooks";
import { produce } from "immer";
import { Loader2 } from "lucide-react";

type TenantUser = GetUsersQuery["users"][0];

const keys = {
	tenantUsers: ["tenant", "users"],
};

function useTenantUsers() {
	const sdk = useTenantAdminSdk();
	return useQuery({
		queryKey: keys.tenantUsers,
		queryFn: async () => {
			const response = await sdk.GetUsers();
			return response.users;
		},
	});
}

function AdminCheckboxCell({ user }: { user: TenantUser }) {
	const queryClient = useQueryClient();
	const { data: currentUser } = userClient.useCurrentUser();
	const updateAdmin = useMutation({
		mutationFn: async (add: boolean) => {
			if (add) {
				await trpcClient.tenantAdmin.addTenantAdmin.mutate({ userId: user.id });
				const users = queryClient.getQueryData<TenantUser[]>(keys.tenantUsers);
				if (users) {
					queryClient.setQueryData(
						keys.tenantUsers,
						produce(users, (draft) => {
							const u = draft.find((d) => d.id === user.id);
							if (u) {
								u.tenants[0].user_tenant_features.push({ feature: { name: FeatureId.TenantAdmin } });
							}
						})
					);
				}
			} else {
				await trpcClient.tenantAdmin.removeTenantAdmin.mutate({ userId: user.id });
				const users = queryClient.getQueryData<TenantUser[]>(keys.tenantUsers);
				if (users) {
					queryClient.setQueryData(
						keys.tenantUsers,
						produce(users, (draft) => {
							const u = draft.find((d) => d.id === user.id);
							if (u) {
								u.tenants[0].user_tenant_features = u.tenants[0].user_tenant_features.filter(
									(f) => f.feature.name !== FeatureId.TenantAdmin
								);
							}
						})
					);
				}
			}
		},
	});
	const isAdmin = user.tenants.some((t) => t.user_tenant_features.some((f) => f.feature.name === FeatureId.TenantAdmin));
	if (updateAdmin.isPending) {
		return <Loader2 className="animate-spin" />;
	}
	return (
		<Checkbox
			checked={isAdmin}
			onCheckedChange={(checked) => updateAdmin.mutate(Boolean(checked))}
			disabled={!currentUser || currentUser.id === user.id}
		/>
	);
}

const extraColumns: ColumnDef<TenantUser>[] = [
	{
		id: "admin",
		header: "Admin",
		cell: ({ row }) => <AdminCheckboxCell user={row.original} />,
	},
];

export function TenantUsersTable() {
	useRequireFeature(FeatureId.TenantAdmin);
	const users = useTenantUsers();
	return (
		<>
			<DataTable data={users.data ?? []} guessColumns={{ extraColumns, excludeColumns: ["tenants"] }} />
		</>
	);
}
