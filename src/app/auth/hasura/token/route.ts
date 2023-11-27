import { apiSdk } from "graphql/api/operations";
import * as jsonwebtoken from "jsonwebtoken";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { FeatureId } from "../../../features/Feature";
import { authOptions } from "../../[...nextauth]/authOptions";

async function getHasuraToken(req: NextRequest) {
	const session = await getServerSession(authOptions);
	const roles = ["user"];
	if (session?.user.id) {
		const response = await apiSdk.GetUserFeatures({
			userId: session.user.id,
			tenantId: session.user.tenants.active,
		});
		if (response.users_by_pk?.features.some((f) => f.feature.feature_id === FeatureId.SiteAdmin) ?? false) {
			roles.push("admin");
		}
		if (response.users_by_pk?.tenants[0].user_tenant_features.some((f) => f.feature.feature_id === FeatureId.TenantAdmin) ?? false) {
			roles.push("tenant_admin");
		}
	}

	const tenants = session?.user.tenants.allowed ?? [];

	const token = jsonwebtoken.sign(
		{
			"https://hasura.io/jwt/claims": {
				"x-hasura-allowed-roles": roles,
				"x-hasura-default-role": "user",
				"x-hasura-user-id": session?.user.id,
				"x-hasura-allowed-tenants": `{${tenants.map((t) => `"${t}"`).join(",")}}`,
				"x-hasura-tenant-id": session?.user.tenants.active,
			},
		},
		process.env.HASURA_JWT_SECRET,
		{
			algorithm: "HS256",
			expiresIn: "5m",
		}
	);

	return NextResponse.json({ token });
}

export { getHasuraToken as GET };
