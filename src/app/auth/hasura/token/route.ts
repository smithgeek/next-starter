import * as jsonwebtoken from "jsonwebtoken";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../[...nextauth]/authOptions";

async function getHasuraToken(req: NextRequest) {
	const session = await getServerSession(authOptions);
	const token = jsonwebtoken.sign(
		{
			"https://hasura.io/jwt/claims": {
				"x-hasura-allowed-roles": ["user"],
				"x-hasura-default-role": "user",
				"x-hasura-role": "user",
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
