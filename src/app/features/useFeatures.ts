import { useQuery } from "@tanstack/react-query";
import { useUserSdk } from "graphql/User/operations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Feature } from "./Feature";

export function useFeatures() {
	const userSdk = useUserSdk();
	const session = useSession();
	return useQuery({
		queryKey: ["features", session.data?.user.id ?? ""],
		queryFn: async () => {
			const response = await userSdk.GetUserFeatures();
			return response.user_features.map(f => f.feature_id) as Feature[];
		},
		enabled: Boolean(session.data?.user.id),
	});
}

export function useRequireFeature(feature: Feature, route: string) {
	const features = useFeatures();
	const router = useRouter();
	useEffect(() => {
		if (features.isSuccess && !features.data.includes(feature)) {
			router.replace(route);
		}
	}, [feature, features.data, features.isSuccess, route, router]);
}
