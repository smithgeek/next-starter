import { UserFragment } from "@auth/hasura-adapter/lib/generated/graphql";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { useImpersonation } from "@/services/useImpersonation";
import { userClient } from "graphql/User/hooks";
import { VenetianMask } from "lucide-react";

function ImpersonateButton({ user }: { user: UserFragment }) {
	const { impersonate } = useImpersonation();
	const currentUserQuery = userClient.useCurrentUser();
	return (
		<>
			{currentUserQuery.data?.id !== user.id && (
				<Button
					onClick={() => impersonate.mutate(user)}
					busy={impersonate.isPending && impersonate.variables.id === user.id}
					variant="ghost"
					size="icon"
				>
					<VenetianMask />
				</Button>
			)}
		</>
	);
}

const extraColumns: ColumnDef<UserFragment>[] = [
	{
		id: "impersonate",
		header: "Impersonate",
		cell: ({ row }) => {
			const user = row.original;
			return <ImpersonateButton user={user} />;
		},
	},
];

export function UsersTable({ users }: { users: UserFragment[] }) {
	return <DataTable guessColumns={{ extraColumns, columns: { emailVerified: { type: "boolean" } } }} data={users} />;
}
