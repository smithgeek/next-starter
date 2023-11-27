import { FeatureId, SearchFeatureStrategy } from "./Feature";
import { userFirstStrategy } from "./Strategies";

export interface FeatureDefinition {
	id: FeatureId;
	strategy?: SearchFeatureStrategy;
}

export function createFeatureDefinition(id: FeatureId, mergeStrategy?: SearchFeatureStrategy): FeatureDefinition {
	return { id, strategy: mergeStrategy ?? userFirstStrategy };
}

function createFeatureDefinitionMapping(id: FeatureId, mergeStrategy?: SearchFeatureStrategy): [FeatureId, FeatureDefinition] {
	return [id, createFeatureDefinition(id, mergeStrategy)];
}

export function createFeatureDefinitions() {
	return new Map<FeatureId, FeatureDefinition>([
		createFeatureDefinitionMapping(FeatureId.SiteAdmin),
		createFeatureDefinitionMapping(FeatureId.TenantAdmin),
	]);
}
