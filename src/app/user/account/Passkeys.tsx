"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PendingButtonContent } from "@/components/ui/pendingButtonContent";
import { Skeleton } from "@/components/ui/skeleton";
import dayjs from "dayjs";
import { Lock, Pencil, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import aaguids from "../../auth/webauthn/register/aaguid.json";
import { Passkey, usePasskeyData } from "./passkeyData";

const passkeyGuids: {
	[key: string]: { name: string; icon_dark?: string; icon_light?: string };
} = aaguids;

function getHumanTime(createdAt: string) {
	if (dayjs().diff(createdAt, "hours") > 6) {
		return dayjs(createdAt).format("LLL");
	}
	return dayjs(createdAt).fromNow();
}

function PasskeyIcon({ passkey }: { passkey: { aaguid: string } | undefined }) {
	const { resolvedTheme } = useTheme();
	const themeIcon = resolvedTheme === "light" ? "icon_light" : "icon_dark";
	if (passkey === undefined) {
		return <Skeleton className="w-10 h-10 rounded-full" />;
	}
	if (
		passkey.aaguid in passkeyGuids &&
		themeIcon in passkeyGuids[passkey.aaguid]
	) {
		return (
			<img
				src={(aaguids as any)[passkey.aaguid][themeIcon]}
				alt=""
				className="w-10 h-10"
			/>
		);
	}
	return <Lock className="w-10 h-10" />;
}

function EditPasskeyForm({
	passkey,
	onClose,
}: {
	passkey: Passkey | null;
	onClose: () => void;
}) {
	const { renamePasskey } = usePasskeyData();
	const form = useForm<{ passkeyName: string }>({
		defaultValues: { passkeyName: passkey?.name ?? "" },
		disabled: renamePasskey.isPending,
	});
	const isDirty = form.formState.isDirty;
	function save({ passkeyName }: { passkeyName: string }) {
		if (passkey && isDirty) {
			renamePasskey.mutate(
				{ id: passkey.credential_id, name: passkeyName },
				{
					onSuccess() {
						onClose();
					},
				}
			);
		} else {
			onClose();
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(save)}>
				<FormField
					name="passkeyName"
					render={({ field }) => (
						<FormControl>
							<Input {...field} />
						</FormControl>
					)}
				/>

				<DialogFooter className="mt-2">
					<Button
						variant="secondary"
						onClick={onClose}
						disabled={renamePasskey.isPending}
					>
						Cancel
					</Button>
					<Button type="submit" disabled={renamePasskey.isPending}>
						<PendingButtonContent pending={renamePasskey.isPending}>
							Save
						</PendingButtonContent>
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
}

function DialogPasskeyEditor({
	passkey,
	onClose,
}: {
	passkey: Passkey | null;
	onClose: () => void;
}) {
	return (
		<Dialog onClose={onClose} open={passkey != null}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Passkey Name</DialogTitle>
				</DialogHeader>
				<EditPasskeyForm
					key={passkey?.credential_id}
					passkey={passkey}
					onClose={onClose}
				/>
			</DialogContent>
		</Dialog>
	);
}

function PasskeyRow({
	passkey,
	disabled,
}: {
	passkey?: Passkey;
	disabled?: boolean;
}) {
	const { deletePasskey } = usePasskeyData();
	const [editing, setEditing] = useState(false);
	return (
		<div className="flex gap-4 items-center">
			<DialogPasskeyEditor
				passkey={editing ? passkey ?? null : null}
				onClose={() => setEditing(false)}
			/>
			<PasskeyIcon passkey={passkey} />
			<div className="flex flex-col flex-1">
				<span className="text-xl">
					{passkey ? (
						passkey.name ?? "Unknown"
					) : (
						<Skeleton className="h-8 w-[100px] my-2" />
					)}
				</span>
				<span className="text-sm text-muted-foreground">
					{passkey ? (
						`Created: ${getHumanTime(passkey.created_at)}`
					) : (
						<Skeleton className="h-4 w-[200px] my-1" />
					)}
				</span>
				<span className="text-sm  text-muted-foreground">
					{passkey ? (
						`Last Used: ${getHumanTime(passkey.last_used)}`
					) : (
						<Skeleton className="h-4 w-[230px] my-1" />
					)}
				</span>
			</div>
			{passkey && (
				<>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-3xl"
						onClick={() => setEditing(true)}
						disabled={disabled}
					>
						<Pencil />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-3xl"
						disabled={disabled}
						onClick={() =>
							deletePasskey.mutate({
								id: passkey.credential_id,
							})
						}
					>
						<PendingButtonContent pending={deletePasskey.isPending}>
							<X />
						</PendingButtonContent>
					</Button>
				</>
			)}
		</div>
	);
}

export function Passkeys() {
	const { passkeys, register } = usePasskeyData();
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Passkeys</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-8">
					{passkeys.isPending && (
						<>
							<PasskeyRow />
							<PasskeyRow />
						</>
					)}
					{passkeys.data?.map(key => (
						<PasskeyRow
							passkey={key}
							key={key.credential_id}
							disabled={register.isPending}
						/>
					))}
				</CardContent>
				<CardFooter>
					<Button
						onClick={() => register.mutate()}
						disabled={register.isPending}
					>
						<PendingButtonContent pending={register.isPending}>
							Add Passkey
						</PendingButtonContent>
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
