export enum FeatureId {
	SiteAdmin,
	TenantAdmin,
}

export interface FeatureOptions {
	feature: FeatureId;
	options: any;
}

export interface UserFeatures {
	features: FeatureOptions[];
	tenantFeatures: FeatureOptions[];
	userTenantFeatures: FeatureOptions[];
}

export type SearchFeatureStrategy = (allFeatures: UserFeatures, feautreId: FeatureId) => FeatureOptions | undefined;
