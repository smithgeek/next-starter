import { useQuery } from "@tanstack/react-query";
import { useAdminSdk } from "./operations";

export const adminClient = {
	useAllUsers() {
		const adminSdk = useAdminSdk();
		return useQuery({
			queryKey: ["allUsers"],
			queryFn: async () => {
				const response = await adminSdk.Admin_GetUsers();
				return response.users;
			},
		});
	},
};
