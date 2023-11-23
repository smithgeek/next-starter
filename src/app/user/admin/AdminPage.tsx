"use client";
import { adminClient } from "graphql/Admin/hooks";
import { Feature } from "../../features/Feature";
import { useRequireFeature } from "../../features/useFeatures";
import { UsersTable } from "./UsersTable";

export function AdminPage() {
	useRequireFeature(Feature.Admin, "/user/dashboard");
	const usersQuery = adminClient.useAllUsers();

	return <>{usersQuery.data && <UsersTable users={usersQuery.data} />}</>;
}
