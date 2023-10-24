import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<SessionProvider>
				<QueryClientProvider client={queryClient}>
					<Head>
						<title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
						<link
							rel="apple-touch-icon"
							sizes="180x180"
							href="/apple-touch-icon.png"
						/>
						<link
							rel="icon"
							type="image/png"
							sizes="32x32"
							href="/favicon-32x32.png"
						/>
						<link
							rel="icon"
							type="image/png"
							sizes="16x16"
							href="/favicon-16x16.png"
						/>
						<link rel="manifest" href="/site.webmanifest" />
						<link
							rel="mask-icon"
							href="/safari-pinned-tab.svg"
							color="#5bbad5"
						/>
						<meta
							name="msapplication-TileColor"
							content="#da532c"
						/>
						<meta name="theme-color" content="</meta>#ffffff" />
					</Head>
					<Component {...pageProps} />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}

export default MyApp;
if (typeof window !== "undefined") {
	const _global = window as any;
	_global.printEnv = () => {
		console.log({
			graphql: process.env.NEXT_PUBLIC_GRAPHQL_URL,
			api: process.env.NEXT_PUBLIC_API_URL,
		});
	};
}
