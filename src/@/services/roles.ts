import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRequireRole(role: string, route: string) {
	const session = useSession();
	const router = useRouter();
	useEffect(() => {
		if (session.data?.user.role !== role) {
			router.push(route);
		}
	}, [session, router, role, route]);
}
