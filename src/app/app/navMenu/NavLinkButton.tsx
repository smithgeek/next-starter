import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkButtonProps {
	href: string;
	children: ReactNode;
}

export function NavButton({ children, className, variant, ...buttonProps }: { children: ReactNode } & ButtonProps) {
	return (
		<Button variant={variant ?? "ghost"} className={cn("w-full justify-start my-2 gap-2 font-bold", className)} {...buttonProps}>
			{children}
		</Button>
	);
}

export function NavLinkButton({ href, children }: NavLinkButtonProps) {
	const pathname = usePathname();
	return (
		<Link href={href}>
			<NavButton variant={pathname?.startsWith(href) ? "secondary" : "ghost"}>{children}</NavButton>
		</Link>
	);
}
