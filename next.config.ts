import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value:
							"frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;",
					},
				],
			},
		]
	},
	images: {
		remotePatterns: [
			{
				hostname: 'img.logo.dev',
				protocol: 'https',
			},
			{
				hostname: 'pbs.twimg.com',
				protocol: 'https',
			},
			{
				hostname: 'abs.twimg.com',
				protocol: 'https',
			},
			{
				hostname: 'avatars.githubusercontent.com',
				protocol: 'https',
			}
		],
		formats: ['image/avif', 'image/webp'],
	},
	compress: false,
	webpack: (config) => {
		return {
			...config,
			optimization: {
				...config.optimization,
				minimize: false,
			},
		}
	},
}

export default withContentCollections(nextConfig)
