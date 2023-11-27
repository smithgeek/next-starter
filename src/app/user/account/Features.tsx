"use client";
import { useFeatures } from "../../features/useFeatures";

export function Features() {
	const features = useFeatures();
	return (
		<div>
			<pre>{JSON.stringify(features.data, null, 4)}</pre>
		</div>
	);
}
