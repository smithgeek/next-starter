"use client";
import Login from "@/components/Login";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { NavMenu } from "./navMenu/Menu";
import { NavigationHeader } from "./navMenu/NavigationHeader";

const width = 300;

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
	const session = useSession();
	if (session.status === "unauthenticated") {
		return <Login providers={["google", "github"]} />;
	}
	if (session.status === "loading") {
		return null;
	}
	return (
		<div>
			<div className="flex flex-col md:flex-row">
				<NavMenu
					className="hidden md:flex fixed top-0 bottom-0 lg:left-0 w-[300px] overflow-y-auto border-r border-border flex-col"
					style={{ width: width, flex: `0 0 ${width}px` }}
				/>
				<div className="md:hidden flex gap-2 p-2 border-b border-border">
					<Sheet>
						<SheetTrigger>
							<Menu />
						</SheetTrigger>
						<SheetContent side="left" hideClose className="p-0 flex flex-col">
							<NavMenu className="flex flex-1" />
						</SheetContent>
					</Sheet>
					<NavigationHeader hidePicker />
				</div>
				<div className="flex-1 flex flex-col md:ml-[300px]">
					<div className="flex-1 p-2">
						{false && (
							<div className="alert alert-warning shadow-lg rounded-none mb-2">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="stroke-current flex-shrink-0 h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
									<div>
										<span>Your subscription is inactive.</span>
										<button className="btn btn-primary btn-sm ml-4" onClick={() => {}}>
											Fix it now
										</button>
									</div>
								</div>
							</div>
						)}
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
