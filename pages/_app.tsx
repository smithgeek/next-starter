import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from 'next/app';
import ReactModal from 'react-modal';
import { useAuthProvider } from "../services/firebase/auth";
import '../styles/globals.css';
import '../styles/material-tailwind.css';

ReactModal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
	useAuthProvider();
	return <ThemeProvider>
		<Component {...pageProps} />
	</ThemeProvider>
}

export default MyApp
