import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { adminSdk } from "./operations";

export const adminClient = {
	useAllUsers() {
		const session = useSession();
		return useQuery({
			queryKey: ["allUsers"],
			queryFn: async () => {
				const response = await adminSdk.Admin_GetUsers();
				return response.users;
			},
			enabled: session.data?.user.role === "admin",
		});
	},
};
