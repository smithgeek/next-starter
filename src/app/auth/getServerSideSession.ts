import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]/authOptions";

export function getServerSideSession() {
	return getServerSession(authOptions);
}
