import { ReactNode } from "react";
import { FeatureId } from "./Feature";
import { useFeatures } from "./useFeatures";

export function RequireFeature({ feature, children }: { feature: FeatureId; children: ReactNode }) {
	const features = useFeatures();
	if (features.has(feature)) {
		return <>{children}</>;
	}
	return null;
}
