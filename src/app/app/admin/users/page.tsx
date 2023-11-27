import { Metadata } from "next";
import { TenantUsersTable } from "./TenantUsersTable";

export default function Page() {
	return (
		<>
			<TenantUsersTable />
		</>
	);
}

export const metadata: Metadata = {
	title: "Admin",
};
