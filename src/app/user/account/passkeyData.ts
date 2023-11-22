import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetPasskeysQuery, useUserSdk } from "graphql/User/operations";
import { registerWebauthn } from "../../auth/registerWebauthn";

const keys = {
	passkeys: ["passkeys"],
};

export type Passkey = GetPasskeysQuery["webauthn_credentials"][0];

function replace<T>(
	original: T[] | null | undefined,
	newValue: T | null | undefined,
	compare: (a: T, b: T) => boolean
) {
	let cache = original
		? [
				...original.filter(c =>
					newValue !== null && newValue !== undefined
						? !compare(c, newValue)
						: false
				),
		  ]
		: [];
	if (newValue) {
		cache.push(newValue);
	}
	return cache;
}

export function usePasskeyData() {
	const queryClient = useQueryClient();
	const userSdk = useUserSdk();
	const passkeys = useQuery({
		queryFn: async () => {
			const response = await userSdk.GetPasskeys();
			return response.webauthn_credentials ?? [];
		},
		queryKey: keys.passkeys,
	});
	const renamePasskey = useMutation({
		mutationFn: async ({ id, name }: { id: string; name: string }) => {
			return await userSdk.RenamePasskey({ id, name });
		},
		onSuccess(data) {
			queryClient.setQueryData<Passkey[]>(keys.passkeys, old => {
				return replace(
					old,
					data.update_webauthn_credentials_by_pk,
					(a, b) => a?.credential_id === b?.credential_id
				);
			});
		},
	});
	const deletePasskey = useMutation({
		mutationFn: async ({ id }: { id: string }) => {
			return await userSdk.DeletePasskey({ id });
		},
		onSuccess(_, { id }) {
			queryClient.setQueryData<Passkey[]>(keys.passkeys, old => {
				return old?.filter(c => c.credential_id !== id);
			});
		},
	});
	const register = useMutation({
		mutationFn: async () => {
			await registerWebauthn();
			queryClient.invalidateQueries({ queryKey: keys.passkeys });
		},
	});
	return {
		passkeys,
		renamePasskey,
		deletePasskey,
		register,
	};
}
