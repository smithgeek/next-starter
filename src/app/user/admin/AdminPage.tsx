"use client";
import { adminClient } from "graphql/Admin/hooks";
import { FeatureId } from "../../features/Feature";
import { useRequireFeature } from "../../features/useFeatures";
import { UsersTable } from "./UsersTable";

export function AdminPage() {
	useRequireFeature(FeatureId.SiteAdmin, "/user/dashboard");
	const usersQuery = adminClient.useAllUsers();

	return <>{usersQuery.data && <UsersTable users={usersQuery.data} />}</>;
}
