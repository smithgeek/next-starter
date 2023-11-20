import { Button } from "@/components/ui/button";
import Link from "next/link";
import { isLinkNavItem, isTextNavItem, NavigationItem } from "./NavigationItem";

interface BottomNavigationProps {
	items: NavigationItem[];
	className?: string;
}

export function BottomNavigation({ items, className }: BottomNavigationProps) {
	return (
		<div className={`w-full h-screen ${className}`}>
			<section
				id="bottom-navigation"
				className="block fixed inset-x-0 bottom-0 z-10"
			>
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
										className="w-full text-center py-2 flex flex-col justify-center items-center cursor-pointer"
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
										className="w-full text-center py-2 flex flex-col justify-center items-center cursor-pointer"
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
				</div>
			</section>
		</div>
	);
}
