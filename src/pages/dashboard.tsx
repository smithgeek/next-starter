import { NavPage } from "@/components/Layouts/NavPage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Head from "next/head";
import { ReactNode } from "react";

function setColor(colorMode: string) {
	document.getElementsByTagName("html")[0].dataset.colorMode = colorMode;
}

function ThemeOverride({
	theme,
	children,
}: {
	theme: "blue" | "green" | "stone" | "red" | "orange";
	children: ReactNode;
}) {
	return <div data-color-mode={theme}>{children}</div>;
}

const Home: NextPage = () => {
	const session = useSession();
	const { resolvedTheme } = useTheme();

	return (
		<NavPage>
			<>
				<Head>
					<title>Dashboard</title>
				</Head>
				<div>
					Logged in as user {session.data?.user.email} (
					{session.data?.user.role})
				</div>
				<div className="flex flex-col gap-2">
					<div className={cn("flex gap-2 flex-col")}>
						<Button variant="default" onClick={() => setColor("")}>
							Default
						</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="destructive">destructive</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="link">Link</Button>
						<Button variant="outline">Outline</Button>
					</div>
				</div>
			</>
		</NavPage>
	);
};

export default Home;
