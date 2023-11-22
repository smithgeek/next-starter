"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useUserSdk } from "graphql/User/operations";
import { registerWebauthn } from "../../auth/registerWebauthn";

const keys = {
	getPasskeys: ["passkeys"],
};

function useGetPasskeys() {
	const userSdk = useUserSdk();
	return useQuery({
		queryFn: async () => {
			const response = await userSdk.GetPasskeys();
			return response.webauthn_credentials ?? [];
		},
		queryKey: keys.getPasskeys,
	});
}

function getHumanTime(createdAt: string) {
	if (dayjs().diff(createdAt, "hours") > 6) {
		return dayjs(createdAt).format("LLL");
	}
	return dayjs(createdAt).fromNow();
}

export function Passkeys() {
	const passkeys = useGetPasskeys();
	return (
		<div>
			{passkeys.data?.map(key => (
				<div key={key.created_at}>
					<Label>{key.name ?? "Unknown"}</Label>
					<Label>Created: {getHumanTime(key.created_at)} </Label>
					<Label>Last Used: {getHumanTime(key.last_used)}</Label>
				</div>
			))}
			<Button onClick={registerWebauthn}>Register Passkey</Button>
		</div>
	);
}
