import { FeatureId, FeatureOptions, SearchFeatureStrategy } from "./Feature";

export function pickFirst(all: FeatureOptions[][], featureId: FeatureId) {
	for (const group of all) {
		const feature = group.find((f) => f.feature === featureId);
		if (feature) {
			return feature;
		}
	}
	return undefined;
}

export const userFirstStrategy: SearchFeatureStrategy = (allFeatures, featureId) => {
	return pickFirst([allFeatures.features, allFeatures.userTenantFeatures, allFeatures.tenantFeatures], featureId);
};

export const tenantFirstStrategy: SearchFeatureStrategy = (allFeatures, featureId) => {
	return pickFirst([allFeatures.tenantFeatures, allFeatures.userTenantFeatures, allFeatures.features], featureId);
};
