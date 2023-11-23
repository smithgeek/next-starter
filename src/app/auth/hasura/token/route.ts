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
		isAdmin = response.user_features.some(f => f.feature_id === 0);
	}

	const token = jsonwebtoken.sign(
		{
			"https://hasura.io/jwt/claims": {
				"x-hasura-allowed-roles": isAdmin
					? ["admin", "user"]
					: ["user"],
				"x-hasura-default-role": "user",
				"x-hasura-user-id": session?.user.id,
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
