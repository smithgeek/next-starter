import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { isLinkNavItem, isTextNavItem, NavigationItem } from "./NavigationItem";
import { LogOutButton } from "./NavigationItems";

interface BottomNavigationProps {
	items: NavigationItem[];
	className?: string;
}

export function BottomNavigation({ items, className }: BottomNavigationProps) {
	return (
		<div className={cn(`w-full fixed bottom-0 pb-2`, className)}>
			<section id="bottom-navigation" className="block z-10">
				<div id="tabs" className="flex justify-around pt-1 px-4">
					{items.map(item => {
						if (isLinkNavItem(item)) {
							return (
								<Link
									href={item.href}
									key={item.href}
									target={item.target}
								>
									<Button
										variant={
											item.active ? "secondary" : "ghost"
										}
										className="w-full text-center p-2 py-7 flex flex-col justify-center items-center cursor-pointer"
									>
										<div>{item.icon}</div>
										<span className="block text-xs">
											{item.text}
										</span>
									</Button>
								</Link>
							);
						}
						if (isTextNavItem(item)) {
							return (
								<div key={item.text}>
									<Button
										variant={
											item.active ? "secondary" : "ghost"
										}
										className="w-full text-center p-2 py-7 flex flex-col justify-center items-center cursor-pointer"
										onClick={item.onClick}
									>
										<div>{item.icon}</div>
										<span className="block text-xs">
											{item.text}
										</span>
									</Button>
								</div>
							);
						}
						return <></>;
					})}
					<LogOutButton mode="bottom" />
				</div>
			</section>
		</div>
	);
}
