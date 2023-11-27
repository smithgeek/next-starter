import { useQuery } from "@tanstack/react-query";
import { FeatureFragment, useUserSdk } from "graphql/User/operations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FeatureId, FeatureOptions, UserFeatures } from "./Feature";
import { createFeatureDefinitions } from "./FeatureDefinitions";
import { userFirstStrategy } from "./Strategies";

function createAppFeatures(allFeatures: UserFeatures) {
	const featureDefinitions = createFeatureDefinitions();
	const cachedFeatures = new Map<FeatureId, FeatureOptions | null>();
	function getFeature(featureId: FeatureId): FeatureOptions | null {
		if (cachedFeatures.has(featureId)) {
			return cachedFeatures.get(featureId)!;
		}
		let featureDefinition = featureDefinitions.get(featureId);
		const strategy = featureDefinition?.strategy ?? userFirstStrategy;
		const featureOptions = strategy(allFeatures, featureId) ?? null;
		cachedFeatures.set(featureId, featureOptions);
		return featureOptions;
	}
	return {
		get(featureId: FeatureId): FeatureOptions | null {
			return getFeature(featureId);
		},
		has(featureId: FeatureId): boolean {
			return this.get(featureId) !== null;
		},
		rawFeatures: allFeatures,
	};
}

function toFeatureOptions(f: FeatureFragment): FeatureOptions {
	return {
		feature: f.feature as FeatureId,
		options: f.options,
	};
}

export function useFeaturesQuery() {
	const userSdk = useUserSdk();
	const session = useSession();
	return useQuery({
		queryKey: ["features", session.data?.user.id ?? ""],
		queryFn: async () => {
			const response = await userSdk.GetUserFeatures({
				userId: session.data?.user.id ?? "",
				tenantId: session.data?.user.tenants.active ?? "",
			});
			const features: UserFeatures = {
				features: response.users_by_pk?.features.map((f) => toFeatureOptions(f.feature)) ?? [],
				tenantFeatures:
					response.users_by_pk?.tenants.flatMap((t) => t?.tenant.features.map((f) => toFeatureOptions(f.feature))) ?? [],
				userTenantFeatures:
					response.users_by_pk?.tenants.flatMap((t) => t?.user_tenant_features.map((f) => toFeatureOptions(f.feature))) ?? [],
			};
			return createAppFeatures(features);
		},
		enabled: Boolean(session.data?.user.id),
		initialData: createAppFeatures({ features: [], tenantFeatures: [], userTenantFeatures: [] }),
	});
}

export function useFeatures() {
	const { data } = useFeaturesQuery();
	return data;
}

export function useRequireFeature(feature: FeatureId, route: string) {
	const features = useFeaturesQuery();
	const router = useRouter();
	useEffect(() => {
		if (features.isSuccess && !features.data.has(feature)) {
			router.replace(route);
		}
	}, [feature, features.data, features.isSuccess, route, router]);
}
