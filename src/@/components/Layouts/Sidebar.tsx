import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useState } from "react";
import {
	NavigationItem,
	isInputNavItem,
	isLinkNavItem,
	isTextNavItem,
} from "./NavigationItem";

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
	return (
		<div
			style={{ width: width, flex: `0 0 ${width}px` }}
			className={props.className}
		>
			<div
				className={cn(
					"fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto border-r border-border flex flex-col",
					{ hidden: !open }
				)}
			>
				<div className="text-xl">
					<div className="p-2.5 mt-1 flex items-center">
						{props.header.icon}
						<h1 className="font-bold text-[15px] ml-3">
							{props.header.title}
						</h1>
					</div>
					<div className="my-2 border-t border-border" />
				</div>
				{props.items.map(item => {
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
									onChange={e =>
										item.onChange(e.target.value)
									}
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
							>
								{item.icon}
								<span>{item.text}</span>
							</Button>
						);
					}
					if (isLinkNavItem(item)) {
						const content = (
							<Button
								variant={item.active ? "secondary" : "ghost"}
								className="w-full justify-start my-2 gap-2 font-bold"
							>
								{item.icon}
								<span>{item.text}</span>
							</Button>
						);
						if (item.target) {
							return (
								<a
									key={item.text}
									href={item.href}
									target={item.target}
									rel="noopener norefferer"
								>
									{content}
								</a>
							);
						}
						return (
							<Link
								key={item.text}
								href={item.href}
								target={item.target}
							>
								{content}
							</Link>
						);
					}
					return item;
				})}
				<div className="flex-1"></div>
				<div>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
