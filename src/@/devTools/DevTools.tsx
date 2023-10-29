"use client";

import { createRoot } from "react-dom/client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const DevToolsMain = dynamic(() => import("./DevToolsMain"), {
	loading: () => null,
});

export function DevTools() {
	useEffect(() => {
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
				// use a dynamic import so the dev-tools code isn't bundled with the regular
				// app code so we don't worry about bundle size.
				// add dev tools UI to the page
				const devToolsRoot = document.createElement("div");
				devToolsRoot.id = "app-devtools";
				document.body.appendChild(devToolsRoot);
				const root = createRoot(devToolsRoot);
				root.render(<DevToolsMain />);
			}
		}
	}, []);
	return null;
}
