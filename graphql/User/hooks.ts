import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { userSdk } from "./operations";

export const userClient = {
	useCurrentUser() {
		const session = useSession();
		return useQuery({
			queryKey: ["currentUser"],
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
