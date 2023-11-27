import { ThemeToggle } from "@/components/ThemeToggle";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userClient } from "graphql/User/hooks";
import { useUserSdk } from "graphql/User/operations";
import { useSession } from "next-auth/react";

export function NavigationHeader({ className, hidePicker }: { className?: string; hidePicker?: boolean }) {
	const currentUser = userClient.useCurrentUser();
	const session = useSession();
	const userSdk = useUserSdk();
	const queryClient = useQueryClient();

	const switchTenant = useMutation({
		mutationFn: async ({ tenantId }: { tenantId: string }) => {
			await userSdk.SetDefaultTenant({ tenantId, userId: session.data?.user.id });
			await session.update();
			await queryClient.clear();
		},
	});
	const showTenantPicker = (currentUser.data?.tenants.length ?? 0) > 1 && hidePicker !== true;

	return (
		<div className={cn("pb-2 flex items-center justify-between w-full", className)}>
			{currentUser.isLoading && <Skeleton className="w-40 h-10" />}
			{!showTenantPicker && <h1 className="font-bold text-[15px] ml-3">{currentUser.data?.tenants?.[0].tenant.name ?? ""}</h1>}
			{showTenantPicker && (
				<Select value={session.data?.user.tenants.active ?? ""} onValueChange={(id) => switchTenant.mutate({ tenantId: id })}>
					<SelectTrigger className="w-[180px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{currentUser.data?.tenants
								?.sort((a, b) => a.tenant.name.localeCompare(b.tenant.name))
								.map((t) => (
									<SelectItem key={t.tenant.id} value={t.tenant.id}>
										{t.tenant.name}
									</SelectItem>
								))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}
			<ThemeToggle />
		</div>
	);
}
