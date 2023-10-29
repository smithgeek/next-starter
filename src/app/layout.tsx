import { Metadata } from "next";
import { ClientLayout } from "./clientLayout";
import "./globals.css";

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-color-mode="blue">
			<body className="bg-background">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
