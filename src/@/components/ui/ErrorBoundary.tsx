import { Component, ReactNode } from "react";

export class ErrorBoundary extends Component<
	{ fallback: JSX.Element; children: ReactNode },
	{ hasError: boolean }
> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: any, info: any) {
		console.error(error, info.componentStack);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return this.props.fallback;
		}

		return this.props.children;
	}
}
