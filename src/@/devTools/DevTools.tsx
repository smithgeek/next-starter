"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DevToolsMain = dynamic(() => import("./DevToolsSheet"), {
	loading: () => null,
});

function isDevToolsEnabled() {
	if (
		typeof window != "undefined" &&
		!document.querySelector("#app-devtools")
	) {
		// this allows you to explicitly disable it in development for example
		const explicitlyDisabled =
			window.location.search.includes("dev-tools=false") ||
			window.localStorage.getItem("dev-tools") === "false";

		const explicitlyEnabled =
			window.location.search.includes("dev-tools=true") ||
			window.localStorage.getItem("dev-tools") === "true";

		// we want it enabled by default everywhere but production and we also want
		// to support the dev tools in production (to make us more productive triaging production issues).
		// you can enable the DevTools via localStorage or the query string.
		if (
			!explicitlyDisabled &&
			(process.env.NODE_ENV === "development" || explicitlyEnabled)
		) {
			return true;
		}
	}
	return false;
}

export function DevTools() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (isDevToolsEnabled() && !show) {
			setShow(true);
		}
	}, [setShow, show]);
	if (show) {
		return (
			<>
				<DevToolsMain />
				<ReactQueryDevtools />
			</>
		);
	}
	return null;
}
