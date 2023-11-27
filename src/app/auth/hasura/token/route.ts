import { apiSdk } from "graphql/api/operations";
import * as jsonwebtoken from "jsonwebtoken";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../[...nextauth]/authOptions";

async function getHasuraToken(req: NextRequest) {
	const session = await getServerSession(authOptions);
	let isAdmin = false;
	if (session?.user.id) {
		const response = await apiSdk.GetUserFeatures({
			userId: session.user.id,
		});
		isAdmin = response.users_by_pk?.features.some((f) => f.feature.feature === 0) ?? false;
	}

	const tenants = session?.user.tenants.allowed ?? [];
	const token = jsonwebtoken.sign(
		{
			"https://hasura.io/jwt/claims": {
				"x-hasura-allowed-roles": isAdmin ? ["admin", "user"] : ["user"],
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
