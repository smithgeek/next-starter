export enum FeatureId {
	SiteAdmin = "site.admin",
	TenantAdmin = "tenant.admin",
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
