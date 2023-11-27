import { useQuery } from "@tanstack/react-query";
import { FeatureFragment, useUserSdk } from "graphql/User/operations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FeatureId } from "./Feature";

interface FeatureOptions {
	feature: FeatureId;
	options: any;
}

interface UserFeatures {
	features: FeatureOptions[];
	tenantFeatures: FeatureOptions[];
	userTenantFeatures: FeatureOptions[];
}

const userOverrideStrategy = (allFeatures: UserFeatures, feautreId: FeatureId) => {
	const userFeature = allFeatures.features.find((f) => f.feature === feautreId);
	if (userFeature) {
		return userFeature;
	}
	const userTenantFeature = allFeatures.features.find((f) => f.feature === feautreId);
	if (userTenantFeature) {
		return userTenantFeature;
	}
	const tenantFeature = allFeatures.features.find((f) => f.feature === feautreId);
	return tenantFeature;
};

const tenantOverrideStrategy = (allFeatures: UserFeatures, feautreId: FeatureId) => {
	const tenantFeature = allFeatures.features.find((f) => f.feature === feautreId);
	if (tenantFeature) {
		return tenantFeature;
	}
	const userTenantFeature = allFeatures.features.find((f) => f.feature === feautreId);
	if (userTenantFeature) {
		return userTenantFeature;
	}
	const userFeature = allFeatures.features.find((f) => f.feature === feautreId);
	return userFeature;
};

type FeatureMergeStrategy = (allFeatures: UserFeatures, feautreId: FeatureId) => FeatureOptions | undefined;

interface Feature {
	id: FeatureId;
	strategy: FeatureMergeStrategy;
}

function createFeature(id: FeatureId, mergeStrategy?: FeatureMergeStrategy): Feature {
	return { id, strategy: mergeStrategy ?? userOverrideStrategy };
}
function createFeatureDefinition(id: FeatureId, mergeStrategy?: FeatureMergeStrategy): [FeatureId, Feature] {
	return [id, createFeature(id, mergeStrategy)];
}
function createFeatureDefinitions() {
	return new Map<FeatureId, Feature>([createFeatureDefinition(FeatureId.SiteAdmin), createFeatureDefinition(FeatureId.TenantAdmin)]);
}

function createAppFeatures(allFeatures: UserFeatures) {
	const featureDefinitions = createFeatureDefinitions();
	function getFeature(featureId: FeatureId) {
		let feature = featureDefinitions.get(featureId);
		if (!feature) {
			feature = createFeature(featureId);
			featureDefinitions.set(featureId, feature);
		}
		return feature;
	}
	return {
		get(featureId: FeatureId): FeatureOptions | undefined {
			return getFeature(featureId).strategy(allFeatures, featureId);
		},
		has(featureId: FeatureId): boolean {
			return this.get(featureId) !== undefined;
		},
	};
}

function toFeatureOptions(f: FeatureFragment): FeatureOptions {
	return {
		feature: f.feature as FeatureId,
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
				tenantId: session.data?.user.tenants.active ?? "",
			});
			const features: UserFeatures = {
				features: response.users_by_pk?.features.map((f) => toFeatureOptions(f.feature)) ?? [],
				tenantFeatures: response.users_by_pk?.tenants.flatMap((t) => t?.features.map((f) => toFeatureOptions(f.feature))) ?? [],
				userTenantFeatures:
					response.users_by_pk?.tenants.flatMap((t) => t?.tenant.features.map((f) => toFeatureOptions(f.feature))) ?? [],
			};
			return createAppFeatures(features);
		},
		enabled: Boolean(session.data?.user.id),
		initialData: createAppFeatures({ features: [], tenantFeatures: [], userTenantFeatures: [] }),
	});
}

export function useRequireFeature(feature: FeatureId, route: string) {
	const features = useFeatures();
	const router = useRouter();
	useEffect(() => {
		if (features.isSuccess && features.data.has(feature)) {
			router.replace(route);
		}
	}, [feature, features.data, features.isSuccess, route, router]);
}
