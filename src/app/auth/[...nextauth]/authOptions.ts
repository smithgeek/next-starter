import { HasuraAdapter } from "@auth/hasura-adapter";
import { verifyAuthenticationResponse } from "@simplewebauthn/server";
import { AuthenticationResponseJSON } from "@simplewebauthn/typescript-types";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import { createTransport } from "nodemailer";
import {
	getChallenge,
	getCredentialById,
	updateCredentialCounter,
} from "../webauthn/credentials";

const domain = process.env.APP_DOMAIN!;
const origin = process.env.APP_ORIGIN!;

export const authOptions: AuthOptions = {
	adapter: HasuraAdapter({
		endpoint: process.env.NEXT_PUBLIC_GRAPHQL_URL,
		adminSecret: "password",
	}),
	providers: [
		EmailProvider({
			server: {
				host: "localhost",
				port: 1025,
				secure: false,
				auth: {
					user: "user",
					pass: "pass",
				},
			},
			from: "test@localhost.com",
			async sendVerificationRequest({ identifier, url, provider }) {
				const appName = process.env.APP_NAME ?? "app";
				const transport = createTransport(provider.server);
				const result = await transport.sendMail({
					to: identifier,
					from: provider.from,
					subject: `Sign in to ${appName}`,
					text: textEmailTemplate({ url, appName }),
					html: htmlEmailTemplate({ url, appName }),
				});
				const failed = result.rejected
					.concat(result.pending)
					.filter(Boolean);
				if (failed.length) {
					throw new Error(
						`Email(s) (${failed.join(", ")}) could not be sent`
					);
				}
			},
		}),
		CredentialsProvider({
			name: "passkey",
			credentials: {},
			async authorize(credentials, request) {
				if (!request.body) {
					return null;
				}
				const {
					id,
					rawId,
					type,
					clientDataJSON,
					authenticatorData,
					signature,
					userHandle,
				} = request.body;

				const response: AuthenticationResponseJSON = {
					id,
					rawId,
					type,
					response: {
						clientDataJSON,
						authenticatorData,
						signature,
						userHandle,
					},
					clientExtensionResults: {},
				};
				const authenticator = await getCredentialById(response.id);
				if (!authenticator) {
					return null;
				}
				const challenge = await getChallenge(authenticator.userId);
				if (!challenge) {
					return null;
				}
				try {
					const { verified, authenticationInfo: info } =
						await verifyAuthenticationResponse({
							response: response,
							expectedChallenge: challenge,
							expectedOrigin: origin,
							expectedRPID: domain,
							authenticator: {
								credentialPublicKey:
									authenticator.credentialPublicKey,
								credentialID: authenticator.credentialId,
								counter: authenticator.counter,
							},
						});

					if (!verified || !info) {
						return null;
					}
					await updateCredentialCounter(
						authenticator.credentialIdBase64,
						info.newCounter
					);
				} catch (err) {
					console.error(err);
					return null;
				}
				return {
					email: authenticator.userId,
					id: authenticator.userId,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token = Object.assign({}, token, {
					access_token: account.access_token,
				});
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.sub;
			return session;
		},
	},
	session: {
		strategy: "jwt",
	},
};

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
export function htmlEmailTemplate(params: {
	url: string;
	appName: string;
	theme?: { brandColor?: string; buttonText?: string };
}) {
	const { url, appName, theme } = params;

	const escapedAppName = appName.replace(/\./g, "&#8203;.");

	const brandColor = theme?.brandColor ?? "#346df1";
	const color = {
		background: "#f9f9f9",
		text: "#444",
		mainBackground: "#fff",
		buttonBackground: brandColor,
		buttonBorder: brandColor,
		buttonText: theme?.buttonText ?? "#fff",
	};

	return `
  <body style="background: ${color.background};">
	<table width="100%" border="0" cellspacing="20" cellpadding="0"
	  style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
	  <tr>
		<td align="center"
		  style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
		  Sign in to <strong>${escapedAppName}</strong>
		</td>
	  </tr>
	  <tr>
		<td align="center" style="padding: 20px 0;">
		  <table border="0" cellspacing="0" cellpadding="0">
			<tr>
			  <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
				  target="_blank"
				  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
				  in</a></td>
			</tr>
		  </table>
		</td>
	  </tr>
	  <tr>
		<td align="center"
		  style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
		  If you did not request this email you can safely ignore it.
		</td>
	  </tr>
	</table>
  </body>
  `;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
export function textEmailTemplate({
	url,
	appName,
}: {
	url: string;
	appName: string;
}) {
	return `Sign in to ${appName}\n${url}\n\n`;
}
