import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" data-color-mode="blue">
			<Head />
			<body className="bg-background">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
