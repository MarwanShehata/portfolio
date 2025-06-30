import merge from 'deepmerge'
import type { Metadata } from 'next'

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
	title: string
	description: string
	ogText?: string
	image?: string
}

const applicationName = 'Marwan Shehata Portfolio'
const author: Metadata['authors'] = {
	name: 'Marwan Shehata Mohamed',
	url: 'https://github.com/MarwanShehata',
}
const publisher = 'Marwan Shehata Mohamed'
const twitterHandle = '@Mrwan_Shehata'

export const createMetadata = ({
	title,
	description,
	ogText,
	image,
	...properties
}: MetadataGenerator): Metadata => {
	const parsedTitle = `${title} | ${applicationName}`

	const defaultMetadata: Metadata = {
		// metadataBase: new URL('https://marwanshehata.com'),
		title: parsedTitle,
		description,
		applicationName,
		authors: [author],
		creator: author.name,
		formatDetection: {
			telephone: false,
		},
		appleWebApp: {
			capable: true,
			statusBarStyle: 'default',
			title: parsedTitle,
		},
		keywords: [
			'frontend developer',
			'react',
			'next.js',
			'typescript',
			'portfolio',
			'web development',
			'marwan shehata mohamed',
		],
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		icons: {
			icon: [
				{
					url: '/favicon/favicon-32x32.png',
					sizes: '32x32',
					type: 'image/png',
				},
				{
					url: '/favicon/favicon-16x16.png',
					sizes: '16x16',
					type: 'image/png',
				},
			],
			shortcut: '/favicon/favicon.ico',
			apple: [
				{
					url: '/favicon/apple-touch-icon-57x57.png',
					sizes: '57x57',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-60x60.png',
					sizes: '60x60',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-72x72.png',
					sizes: '72x72',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-76x76.png',
					sizes: '76x76',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-114x114.png',
					sizes: '114x114',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-120x120.png',
					sizes: '120x120',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-144x144.png',
					sizes: '144x144',
					type: 'image/png',
				},
				{
					url: '/favicon/apple-touch-icon-152x152.png',
					sizes: '152x152',
					type: 'image/png',
				},
			],
		},

		other: {
			'msapplication-TileColor': '#da532c',
			'msapplication-TileImage': '/favicon/mstile-144x144.png',
		},
		openGraph: {
			title: parsedTitle,
			description,
			type: 'website',
			siteName: applicationName,
			locale: 'en_US',
			images: [
				{
					url: image ?? `/og?title=${encodeURIComponent(ogText ?? '')}`,
					width: 1200,
					height: 630,
				},
			],
		},
		publisher,
		twitter: {
			title: parsedTitle,
			description,
			creatorId: twitterHandle,
			card: 'summary_large_image',
			creator: twitterHandle,
			images: [
				{
					url: image ?? `/og?title=${encodeURIComponent(ogText ?? '')}`,
					width: 1200,
					height: 630,
				},
			],
		},
	}

	const metadata: Metadata = merge(defaultMetadata, properties)

	return metadata
}
