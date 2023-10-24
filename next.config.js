/** @type {import('next').NextConfig} */

var date = new Date();
var buildId = `${date.getUTCFullYear()}.${(date.getUTCMonth() + 1)
	.toString()
	.padStart(2, "0")}.${date.getUTCDate().toString().padStart(2, "0")}.${date
	.getUTCHours()
	.toString()
	.padStart(2, "0")}${date.getUTCMinutes().toString().padStart(2, "0")}${date
	.getUTCSeconds()
	.toString()
	.padStart(2, "0")}`;

const nextConfig = {
	reactStrictMode: true,
	generateBuildId: () => buildId,
	output: "standalone",
	poweredByHeader: false,
	env: {
		NEXT_PUBLIC_BUILD_ID: buildId,
	},
};

module.exports = nextConfig;
