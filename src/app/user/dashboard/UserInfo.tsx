"use client";
import { useSession } from "next-auth/react";

export function UserInfo() {
	const session = useSession();
	return <div>Logged in as user {session.data?.user.email}</div>;
}
