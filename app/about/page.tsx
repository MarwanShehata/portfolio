import { Mdx } from '@/components/mdx'
import { Section } from '@/components/section'
import { createMetadata } from '@/lib/metadata'
import { allPages } from 'content-collections'
import type { Metadata } from 'next'

// --- Start of aysnchronous part ---
// console.log('All pages found by content-collections:', allPages.map(p => p._meta.fileName));
// --- End of aysnchronous part ---
const page = allPages.find((page) => page._meta.fileName === 'about.mdx')

if (!page) {
	throw new Error('About page not found')
}

export const metadata: Metadata = createMetadata({
	title: page.title,
	description: page.description,
})

const AboutPage = () => (
	<>
		<Section className='gap-0'>
			<h1>{page.title}</h1>
			<p className='text-foreground-lighter'>{page.description}</p>
		</Section>
		<article>
			<Section>
				<Mdx code={page.body} />
			</Section>
		</article>
	</>
)

export default AboutPage
