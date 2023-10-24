import { NavPage } from "@/components/Layouts/NavPage";
import { useRequireRole } from "@/services/roles";
import { useImpersonation } from "@/services/useImpersonation";
import { adminClient } from "graphql/Admin/hooks";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
	useRequireRole("admin", "/dashboard");
	const usersQuery = adminClient.useAllUsers();
	const { impersonate } = useImpersonation();
	const session = useSession();
	return (
		<NavPage>
			<>
				<Head>
					<title>Admin</title>
				</Head>
				<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{usersQuery.data?.map(user => {
						return (
							<div
								className="card bg-neutral shadow-xl m-4"
								key={user.id}
							>
								<div className="card-body p-4">
									<h2 className="card-title flex-1">
										{user?.name ?? user.email}
									</h2>
									<div className="card-actions flex">
										<button
											disabled={
												session.data?.user.id ===
												user.id
											}
											className="btn btn-primary flex-1 btn-sm w-28"
											onClick={() => impersonate(user.id)}
										>
											Impersonate
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</>
		</NavPage>
	);
};

export default Home;
