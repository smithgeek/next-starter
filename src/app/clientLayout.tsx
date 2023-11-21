"use client";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DevTools } from "@/devTools/DevTools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import NextAdapterApp from "next-query-params/app";
import { ReactNode } from "react";
import { QueryParamProvider } from "use-query-params";

const queryClient = new QueryClient();

export function ClientLayout({ children }: { children: ReactNode }) {
	return (
		<QueryParamProvider adapter={NextAdapterApp}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<SessionProvider basePath="/auth">
					<QueryClientProvider client={queryClient}>
						{children}
						<DevTools />
					</QueryClientProvider>
				</SessionProvider>
			</ThemeProvider>
		</QueryParamProvider>
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
