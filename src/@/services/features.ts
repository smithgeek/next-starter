import { useRouter } from "next/navigation";
import { useEffect } from "react";

export enum FeatureFlags {
	SiteAdmin,
}
export interface Feature {
	flag?: FeatureFlags;
	/** @format int32 */
	value?: number | null;
}

function createFeaturesActions(features: Feature[]) {
	return {
		features,
		has(feature: FeatureFlags) {
			return features.some(f => f.flag === feature);
		},
	};
}
export type FeatureActions = ReturnType<typeof createFeaturesActions>;

export function useFeatures() {
	return {
		features: createFeaturesActions([]),
	};
}

export function useRequireFeature(feature: FeatureFlags, redirect: string) {
	const { features } = useFeatures();
	const router = useRouter();
	useEffect(() => {
		if (!features.has(feature)) {
			router.push(redirect);
		}
	}, [features, router, feature, redirect]);
}
