import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useUserSdk } from "./operations";

export const userClient = {
	useCurrentUser() {
		const userSdk = useUserSdk();
		const session = useSession();
		return useQuery({
			queryKey: ["currentUser", session.data?.user.id ?? ""],
			queryFn: async () => {
				const response = await userSdk.User_GetCurrentUser();
				if (response.users.length > 0) {
					return response.users[0];
				}
				return null;
			},
			enabled: !!session.data?.user,
		});
	},
};
