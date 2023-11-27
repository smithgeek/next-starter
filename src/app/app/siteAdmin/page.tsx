import { Metadata } from "next";
import { AdminPage } from "./AdminPage";

export default function Page() {
	return <AdminPage />;
}

export const metadata: Metadata = {
	title: "Site Admin",
};
