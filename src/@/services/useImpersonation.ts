export function useImpersonation() {
	return {
		endImpersonation() {},
		impersonating: false,
		impersonate(id: string) {},
	};
}
