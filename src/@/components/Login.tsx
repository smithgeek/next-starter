import { GithubIcon } from "@/components/Icons/GithubIcon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { ArrowBigLeft } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { signInWithWebauthn } from "../../app/auth/signInWebauthn";
import { Label } from "./ui/label";

type AuthProviders = "Google" | "Github" | "Passkey";

interface LoginProps {
	providers: AuthProviders[];
}

export default function Login({ providers }: LoginProps) {
	const session = useSession();
	const [email, setEmail] = useState("");
	const [view, setView] = useState<
		"login" | "reset" | "signup" | "resetSent" | "checkEmail"
	>("login");
	const [error, setError] = useState(null);
	const logInWithEmail = useMutation({
		mutationFn: async () => {
			const response = await signIn("email", { email, redirect: false });
			if (response?.ok) {
				setView("checkEmail");
			}
		},
	});

	const usesPaskeyProvider = providers.includes("Passkey");
	const oAuthProviders = providers.filter(p => p !== "Passkey");

	const loggingIn = session.status === "loading";

	const submitCredentials = async (method: "passkey" | "email") => {
		setError(null);
		try {
			if (view === "login") {
				if (method === "passkey") {
					signInWithWebauthn(email);
				} else {
					logInWithEmail.mutate();
				}
			} else if (view === "reset") {
				//await userAuth.resetPassword(email);
				setView("resetSent");
			} else if (view === "signup") {
				//await userAuth.createUser(email, password);
			}
		} catch (error: any) {
			setError(error);
		}
	};

	let action = "Sign In";
	if (view === "reset") {
		action = "Reset Password";
	} else if (view === "signup") {
		action = "Signup";
	}

	return (
		<div className="h-screen flex flex-col justify-center">
			{(session.status === "unauthenticated" ||
				session.status === "loading") && (
				<div className="container mx-auto px-4">
					<div className="flex content-center items-center justify-center h-full">
						<div className="w-full lg:w-4/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border border-border bg-card">
								<div className="rounded-t mb-0 px-6 py-6">
									{view !== "login" && (
										<Button
											onClick={() => setView("login")}
											className="flex items-center gap-1"
										>
											<ArrowBigLeft className="w-5" />
											Back
										</Button>
									)}
									<div className="text-center mb-3 flex flex-col justify-center">
										{view === "login" && (
											<h6 className="text-sm font-bold">
												Sign in{" "}
												{oAuthProviders.length > 0
													? "with"
													: ""}
											</h6>
										)}
									</div>
									{view === "resetSent" && (
										<div className="m-8">
											Check your email for instructions on
											resetting your password.
										</div>
									)}
									{view === "login" && (
										<>
											<div className="btn-wrapper text-center flex justify-around">
												{providers.includes(
													"Github"
												) && (
													<Button
														variant="outline"
														className="bg-background text-foreground gap-2"
														onClick={() =>
															signIn("github")
														}
													>
														<GithubIcon className="w-6 h-6 text-foreground" />
														Github
													</Button>
												)}
												{providers.includes(
													"Google"
												) && (
													<Button
														variant="outline"
														className="bg-background text-foreground"
														onClick={() =>
															signIn("google")
														}
													>
														<img
															alt="Sign in with google"
															className="w-5 mr-1"
															src="/assets/img/google.svg"
														/>
														Google
													</Button>
												)}
											</div>
											{usesPaskeyProvider &&
												oAuthProviders.length > 0 && (
													<hr className="mt-6 border-b-1 border-blueGray-300" />
												)}
										</>
									)}
									{view === "checkEmail" && (
										<>
											<Label>
												Check your email for a sign in
												link.
											</Label>
										</>
									)}
								</div>
								{usesPaskeyProvider &&
									view !== "resetSent" &&
									view !== "checkEmail" && (
										<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
											{oAuthProviders.length > 0 &&
												view === "login" && (
													<div className="text-center mb-3 font-bold">
														<small>
															Or sign in with
															email
														</small>
													</div>
												)}
											<form
												onSubmit={e => {
													e.preventDefault();
												}}
											>
												<div className="relative w-full mb-3">
													<label
														className="block uppercase text-xs font-bold mb-2"
														htmlFor="login-username"
													>
														Email
													</label>
													<Input
														type="email"
														placeholder="Email"
														name="username"
														id="login-username"
														value={email}
														onChange={e =>
															setEmail(
																e.target.value
															)
														}
													/>
												</div>

												{error && (
													<div className="text-red-400 font-bold">
														{error}
													</div>
												)}
												<div className="text-center mt-6 flex gap-2">
													<Button
														className={`w-full ${
															loggingIn
																? "loading btn-disabled"
																: ""
														}`}
														onClick={() =>
															submitCredentials(
																"passkey"
															)
														}
														disabled={loggingIn}
													>
														PassKey
													</Button>
													<Button
														className={`w-full ${
															loggingIn
																? "loading btn-disabled"
																: ""
														}`}
														onClick={() =>
															submitCredentials(
																"email"
															)
														}
														disabled={loggingIn}
													>
														Magic Link
													</Button>
												</div>
											</form>
										</div>
									)}
							</div>
							{usesPaskeyProvider && view === "login" && (
								<div className="flex flex-wrap mt-6 relative justify-between">
									<div>
										<Button
											variant="ghost"
											onClick={() => setView("reset")}
										>
											<small>Forgot password?</small>
										</Button>
									</div>
									<ThemeToggle size="icon" />
									<div>
										<Button
											variant="ghost"
											onClick={() => setView("signup")}
										>
											<small>Create new account</small>
										</Button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
