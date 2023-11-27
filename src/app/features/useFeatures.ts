import { useQuery } from "@tanstack/react-query";
import { FeatureFragment, useUserSdk } from "graphql/User/operations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Feature } from "./Feature";

interface FeatureOptions {
	feature: Feature;
	options: any;
}

interface UserFeatures {
	features: FeatureOptions[];
	tenantFeatures: FeatureOptions[];
	userTenantFeatures: FeatureOptions[];
}

function toFeatureOptions(f: FeatureFragment): FeatureOptions {
	return {
		feature: f.feature as Feature,
		options: f.options,
	};
}

export function useFeatures() {
	const userSdk = useUserSdk();
	const session = useSession();
	return useQuery({
		queryKey: ["features", session.data?.user.id ?? ""],
		queryFn: async () => {
			const response = await userSdk.GetUserFeatures({
				userId: session.data?.user.id ?? "",
			});
			const features: UserFeatures = {
				features: response.users_by_pk?.features.map((f) => toFeatureOptions(f.feature)) ?? [],
				tenantFeatures: response.users_by_pk?.tenants.flatMap((t) => t?.features.map((f) => toFeatureOptions(f.feature))) ?? [],
				userTenantFeatures:
					response.users_by_pk?.tenants.flatMap((t) => t?.tenant.features.map((f) => toFeatureOptions(f.feature))) ?? [],
			};
			return features;
		},
		enabled: Boolean(session.data?.user.id),
	});
}

export function hasFeature(features: UserFeatures | undefined, feature: Feature) {
	if (features === undefined) {
		return false;
	}
	return (
		features.features.some((f) => f.feature === feature) ||
		features.tenantFeatures.some((f) => f.feature === feature) ||
		features.userTenantFeatures.some((f) => f.feature === feature)
	);
}

export function useRequireFeature(feature: Feature, route: string) {
	const features = useFeatures();
	const router = useRouter();
	useEffect(() => {
		if (features.isSuccess && !hasFeature(features.data, feature)) {
			router.replace(route);
		}
	}, [feature, features.data, features.isSuccess, route, router]);
}
