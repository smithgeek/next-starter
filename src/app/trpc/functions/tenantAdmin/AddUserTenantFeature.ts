import { getServerSideSession } from "@/app/auth/getServerSideSession";
import { FeatureId } from "@/app/features/Feature";
import { makeUuid } from "@/lib/makeUuid";
import { Features_Insert_Input, getApiSdkWithHeaders } from "graphql/api/operations";
import { z } from "zod";
import { procedure, router } from "../../server";

function getSdk(tenantId: string) {
	return getApiSdkWithHeaders({
		["x-hasura-role"]: "tenant_admin",
		["x-hasura-use-backend-only-permissions"]: "true",
		["x-hasura-tenant-id"]: tenantId,
	});
}

async function addUserTenantFeature(userId: string, feature: Features_Insert_Input) {
	const session = await getServerSideSession();
	if (session && session.user.tenants.isAdmin) {
		await getSdk(session.user.tenants.active).AddUserTenantFeature({
			tenantId: session.user.tenants.active,
			userId,
			feature,
		});
	}
}

async function removeUserTenantFeature(userId: string, featureId: FeatureId) {
	const session = await getServerSideSession();
	if (session && session.user.tenants.isAdmin) {
		await getSdk(session.user.tenants.active).DeleteUserTenantFeature({
			featureId,
			tenantId: session?.user.tenants.active,
			userId,
		});
	}
}

async function makeUserTenantAdmin({ userId }: { userId: string }) {
	addUserTenantFeature(userId, {
		feature_id: FeatureId.TenantAdmin,
		id: makeUuid(),
	});
}

async function removeTenantAdmin({ userId }: { userId: string }) {
	await removeUserTenantFeature(userId, FeatureId.TenantAdmin);
}

export const tenantAdminRouter = router({
	addTenantAdmin: procedure.input(z.object({ userId: z.string() })).mutation(async ({ input }) => makeUserTenantAdmin(input)),
	removeTenantAdmin: procedure.input(z.object({ userId: z.string() })).mutation(async ({ input }) => removeTenantAdmin(input)),
});
