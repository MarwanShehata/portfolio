import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
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
