import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface DevToolsState {
	showScreenSize?: boolean;
	panel?: {
		open?: boolean;
		tab?: string;
	session?: {
		};
	};
	update(updater: (draft: DevToolsState) => void): void;
}

export const useDevToolsStore = create<DevToolsState>()(
	persist(
		(set, get) => ({
			update: (updater: (draft: DevToolsState) => void) => {
				const newValue = produce(get(), updater);
				set(newValue);
			},
		}),
		{
			name: "devToolsState",
			partialize: state => {
				return Object.fromEntries(
					Object.entries(state).filter(
						([key]) => !["session"].includes(key)
					)
				);
			},
		}
	)
);
