import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true, // or false if this is temporary
			},
		];
	},
};

export default nextConfig;
