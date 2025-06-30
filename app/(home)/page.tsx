import { Mdx } from '@/components/mdx'
import { Section } from '@/components/section'
import { createMetadata } from '@/lib/metadata'
import { allPages } from 'content-collections'
import type { Metadata } from 'next'
import Image from 'next/image'
import avatar from './avatar.jpg'

const page = allPages.find((page) => page._meta.fileName === 'home.mdx')

if (!page) {
	throw new Error('Home page not found')
}

export const metadata: Metadata = createMetadata({
	title: page.title,
	description: page.description,
})

const HomePage = () => (
	<>
		<Section className='flex items-center gap-4'>
			<Image
				src={avatar}
				alt=''
				width={40}
				height={40}
				className='size-10 rounded-full'
				placeholder='blur'
				priority
			/>
			<div>
				<p className='font-medium text-foreground leading-normal'>
					Marwan Shehata
				</p>
				<p className='text-foreground-lighter text-sm leading-normal'>
					Frontend Web Developer, currently at{' '}
					<a href='https://site.takhz.in/' aria-label='Euclid website'>
						Euclid
					</a>
					.
				</p>
			</div>
		</Section>
		<article>
			<Section delay={0.2}>
				<Mdx code={page.body} />
			</Section>
		</article>
	</>
)

export default HomePage
