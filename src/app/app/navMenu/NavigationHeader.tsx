import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userClient } from "graphql/User/hooks";
import { useUserSdk } from "graphql/User/operations";
import { User2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { NavLinkButton } from "./NavLinkButton";

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
		<div className={cn("pb-2 flex items-center justify-between w-full gap-2", className)}>
			{currentUser.isLoading && <Skeleton className="w-full h-10" />}
			{!showTenantPicker && <h1 className="font-bold text-[15px] ml-3">{currentUser.data?.tenants?.[0].tenant.name ?? ""}</h1>}
			{showTenantPicker && (
				<Select value={session.data?.user.tenants.active ?? ""} onValueChange={(id) => switchTenant.mutate({ tenantId: id })}>
					<SelectTrigger className="w-full">
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

			<SimpleTooltip tooltip="Account">
				<NavLinkButton href="/app/account">
					<User2 />
				</NavLinkButton>
			</SimpleTooltip>
		</div>
	);
}
