import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userClient } from "graphql/User/hooks";
import { useUserSdk } from "graphql/User/operations";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { NavigationItem, isInputNavItem, isLinkNavItem, isTextNavItem } from "./NavigationItem";
import { LogOutButton } from "./NavigationItems";

interface SidebarProps {
	header: {
		title: string;
		icon?: ReactNode;
	};
	items: NavigationItem[];
	className?: string;
}

const width = 300;
export function Sidebar(props: SidebarProps) {
	const [open, setOpen] = useState(true);
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
	const showTenantPicker = (currentUser.data?.tenants.length ?? 0) > 1;
	return (
		<div style={{ width: width, flex: `0 0 ${width}px` }} className={props.className}>
			<div
				className={cn("fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto border-r border-border flex flex-col", {
					hidden: !open,
				})}
			>
				<div className="text-xl">
					<div className="p-2.5 mt-1 flex items-center">
						{props.header.icon}
						{!showTenantPicker && (
							<h1 className="font-bold text-[15px] ml-3">{currentUser.data?.tenants?.[0].tenant.name ?? ""}</h1>
						)}
						{showTenantPicker && (
							<Select
								value={session.data?.user.tenants.active ?? ""}
								onValueChange={(id) => switchTenant.mutate({ tenantId: id })}
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{currentUser.data?.tenants?.map((t) => (
											<SelectItem key={t.tenant.id} value={t.tenant.id}>
												{t.tenant.name}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						)}
					</div>
					<div className="my-2 border-t border-border" />
				</div>
				{props.items.map((item) => {
					if (isInputNavItem(item)) {
						return (
							<div
								key={item.text}
								className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
							>
								{item.icon}
								<input
									type="text"
									value={item.value}
									onChange={(e) => item.onChange(e.target.value)}
									placeholder={item.text}
									className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
								/>
							</div>
						);
					}
					if (isTextNavItem(item)) {
						return (
							<Button
								variant={item.active ? "secondary" : "ghost"}
								className="w-full justify-start my-2 gap-2 font-bold"
								onClick={item.onClick}
								key={item.text}
							>
								{item.icon}
								<span>{item.text}</span>
							</Button>
						);
					}
					if (isLinkNavItem(item)) {
						const content = (
							<Button variant={item.active ? "secondary" : "ghost"} className="w-full justify-start my-2 gap-2 font-bold">
								{item.icon}
								<span>{item.text}</span>
							</Button>
						);
						if (item.target) {
							return (
								<a key={item.text} href={item.href} target={item.target} rel="noopener norefferer">
									{content}
								</a>
							);
						}
						return (
							<Link key={item.text} href={item.href} target={item.target}>
								{content}
							</Link>
						);
					}
					return item;
				})}
				<LogOutButton mode="side" />
				<div className="flex-1"></div>
				<div>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
