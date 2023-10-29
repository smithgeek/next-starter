import { Dispatch, createContext, useContext } from "react";

export interface DevToolsState {
	showScreenSize?: boolean;
}

const DevToolsContext = createContext<{
	state: DevToolsState;
	setState: Dispatch<DevToolsState>;
}>({ state: {}, setState: () => {} });

export function useDevToolsState(): [DevToolsState, Dispatch<DevToolsState>] {
	const context = useContext(DevToolsContext);
	return [context.state, context.setState];
}

export const DevToolsContextProvider = DevToolsContext.Provider;
