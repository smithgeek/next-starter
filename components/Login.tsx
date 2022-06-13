import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { AuthState, useUser } from "../services/firebase/auth";

type AuthProviders = 'Google' | 'Github' | 'Password';

interface LoginProps {
	providers: AuthProviders[];
}

export default function Login({ providers }: LoginProps) {
	const userAuth = useUser();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const usesPaswordProvider = providers.includes('Password');
	const oAuthProviders = providers.filter(p => p !== "Password");

	return (
		<div className="bg-blue-grey-900 h-screen flex flex-col justify-center">
			{userAuth.state === AuthState.LoggedOut && <div className="container mx-auto px-4">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="rounded-t mb-0 px-6 py-6">
								<div className="text-center mb-3">
									<h6 className="text-blueGray-500 text-sm font-bold">
										Sign in {oAuthProviders.length > 0 ? "with" : ""}
									</h6>
								</div>
								<div className="btn-wrapper text-center flex justify-around">
									{providers.includes('Github') && <Button
										className="bg-white inline-flex items-center"
										style={{ color: 'black' }}
										type="button"
										onClick={userAuth.signInWithGithub}
									>
										<img
											alt="Sign in with github"
											className="w-5 mr-1"
											src="/assets/img/github.svg"
										/>
										Github
									</Button>}
									{providers.includes('Google') && <Button
										className="bg-white inline-flex items-center"
										style={{ color: 'black' }}
										type="button"
										onClick={userAuth.signInWithGoogle}
									>
										<img
											alt="Sign in with google"
											className="w-5 mr-1"
											src="/assets/img/google.svg"
										/>
										Google
									</Button>}
								</div>
								{usesPaswordProvider && oAuthProviders.length > 0 && <hr className="mt-6 border-b-1 border-blueGray-300" />}
							</div>
							{usesPaswordProvider && <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								{oAuthProviders.length > 0 && <div className="text-blueGray-400 text-center mb-3 font-bold">
									<small>Or sign in with credentials</small>
								</div>}
								<form>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Email
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Email"
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											type="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Password"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
									<div>
										<label className="inline-flex items-center cursor-pointer">
											<input
												id="customCheckLogin"
												type="checkbox"
												className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
											/>
											<span className="ml-2 text-sm font-semibold text-blueGray-600">
												Remember me
											</span>
										</label>
									</div>

									<div className="text-center mt-6">
										<Button
											color="blue-grey"
											className="w-full"
											type="button"
											onClick={() => userAuth.signInWithPassword(email, password)}
										>
											Sign In
										</Button>
									</div>
								</form>
							</div>}
						</div>
						{usesPaswordProvider && <div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<a
									href="#pablo"
									onClick={(e) => e.preventDefault()}
									className="text-blueGray-200"
								>
									<small>Forgot password?</small>
								</a>
							</div>
							<div className="w-1/2 text-right">
								<Link href="/auth/register">
									<small className="text-blueGray-200">Create new account</small>
								</Link>
							</div>
						</div>}
					</div>
				</div>
			</div>}
		</div>
	);
}