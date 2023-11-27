"use client";
import { useFeaturesQuery } from "../../features/useFeatures";

export function Features() {
	const features = useFeaturesQuery();
	return (
		<div>
			<pre>{JSON.stringify(features.data, null, 4)}</pre>
		</div>
	);
}
