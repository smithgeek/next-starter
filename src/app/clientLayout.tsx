"use client";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DevTools } from "@/devTools/DevTools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export function ClientLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<SessionProvider>
				<QueryClientProvider client={queryClient}>
					{children}
					<ReactQueryDevtools />
					<DevTools />
				</QueryClientProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}

if (typeof window !== "undefined") {
	const _global = window as any;
	_global.printEnv = () => {
		console.log({
			graphql: process.env.NEXT_PUBLIC_GRAPHQL_URL,
			api: process.env.NEXT_PUBLIC_API_URL,
		});
	};
}
