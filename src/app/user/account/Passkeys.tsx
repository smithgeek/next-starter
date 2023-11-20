"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { userSdk } from "graphql/User/operations";
import { registerWebauthn } from "../../auth/registerWebauthn";

const keys = {
	getPasskeys: ["passkeys"],
};

function useGetPasskeys() {
	return useQuery({
		queryFn: async () => {
			const response = await userSdk.GetPasskeys();
			return response.webauthn_credentials ?? [];
		},
		queryKey: keys.getPasskeys,
	});
}

export function Passkeys() {
	const passkeys = useGetPasskeys();
	return (
		<div>
			{passkeys.data?.map(key => (
				<div key={key.created_at}>{key.name}</div>
			))}
			<Button onClick={registerWebauthn}>Register Passkey</Button>
		</div>
	);
}
