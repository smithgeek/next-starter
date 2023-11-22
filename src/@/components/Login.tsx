import { GithubIcon } from "@/components/Icons/GithubIcon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { signIn as nextAuthSignin, useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithWebauthn } from "../../app/auth/signInWebauthn";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Label } from "./ui/label";
import { PendingButtonContent } from "./ui/pendingButtonContent";

type AuthProviders = "google" | "github";

interface LoginProps {
	providers: AuthProviders[];
}

interface FormSchema {
	email: string;
}

export default function Login({ providers }: LoginProps) {
	const session = useSession();
	const signIn = useMutation({
		mutationFn: async (args: FormSchema | AuthProviders) => {
			if (typeof args === "string") {
				return await nextAuthSignin(args);
			}
			const { email } = args;
			try {
				await signInWithWebauthn(email);
			} catch {
				const response = await nextAuthSignin("email", {
					email,
					redirect: false,
				});
				if (response?.ok) {
					setView("checkEmail");
				}
			}
		},
	});
	const form = useForm<FormSchema>({
		defaultValues: { email: "" },
		disabled: signIn.isPending,
	});
	const [view, setView] = useState<"login" | "checkEmail">("login");

	return (
		<div className="h-screen flex flex-col justify-center">
			{(session.status === "unauthenticated" ||
				session.status === "loading") && (
				<div className="container mx-auto px-4">
					<div className="flex content-center items-center justify-center h-full">
						<div className="w-full lg:w-4/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border border-border bg-card">
								<div className="rounded-t mb-0 px-6 py-6">
									<div className="text-center mb-3 flex flex-col justify-center">
										{view === "login" && (
											<h6 className="text-sm font-bold">
												Sign in{" "}
												{providers.length > 0
													? "with"
													: ""}
											</h6>
										)}
									</div>
									{view === "login" && (
										<>
											<div className="btn-wrapper text-center flex justify-around">
												{providers.includes(
													"github"
												) && (
													<Button
														variant="outline"
														className="bg-background text-foreground gap-2"
														onClick={() =>
															signIn.mutate(
																"github"
															)
														}
														disabled={
															signIn.isPending
														}
													>
														<GithubIcon className="w-6 h-6 text-foreground" />
														Github
													</Button>
												)}
												{providers.includes(
													"google"
												) && (
													<Button
														variant="outline"
														className="bg-background text-foreground"
														onClick={() =>
															signIn.mutate(
																"google"
															)
														}
														disabled={
															signIn.isPending
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
											{providers.length > 0 && (
												<hr className="mt-6 border-b-1 border-blueGray-300" />
											)}
										</>
									)}
									{view === "checkEmail" && (
										<div className="w-full flex justify-center mb-2">
											<Label>
												Check your email for a sign in
												link.
											</Label>
										</div>
									)}
								</div>
								{view !== "checkEmail" && (
									<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
										{providers.length > 0 &&
											view === "login" && (
												<div className="text-center mb-3 font-bold">
													<small>
														Or sign in with email
													</small>
												</div>
											)}
										<Form {...form}>
											<form
												onSubmit={form.handleSubmit(
													data => signIn.mutate(data)
												)}
											>
												<FormField
													name="email"
													render={({ field }) => {
														return (
															<FormItem>
																<FormLabel>
																	Email
																</FormLabel>
																<FormControl>
																	<Input
																		type="email"
																		{...field}
																	/>
																</FormControl>
															</FormItem>
														);
													}}
												/>

												<Button
													className="mt-4 w-full"
													type="submit"
													disabled={signIn.isPending}
												>
													<PendingButtonContent
														pending={
															signIn.isPending
														}
													>
														Sign In
													</PendingButtonContent>
												</Button>
											</form>
										</Form>
									</div>
								)}
							</div>
							<div className="flex flex-wrap mt-6 relative justify-center">
								<ThemeToggle size="icon" />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
