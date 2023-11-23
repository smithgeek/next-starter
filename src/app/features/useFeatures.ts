import { useQuery } from "@tanstack/react-query";
import { useUserSdk } from "graphql/User/operations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Feature } from "./Feature";

export function useFeatures() {
	const userSdk = useUserSdk();
	return useQuery({
		queryKey: ["features"],
		queryFn: async () => {
			const response = await userSdk.GetUserFeatures();
			return response.user_features.map(f => f.feature_id) as Feature[];
		},
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
