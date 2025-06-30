import { Section } from '@/components/section'
import { env } from '@/lib/env'
import { createMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import Link from 'next/link'
import { Suspense } from 'react'
import { ContactForm } from './components/form'

const title = 'Contact'
const description = "Let's chat."

export const metadata: Metadata = createMetadata({
	title,
	description,
	ogText: 'Want to chat about something? Get in touch.',
})

const Contact = () => {
	try {
		return (
			<ReCaptchaProvider reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
				<Section className='gap-0'>
					<h1>{title}</h1>
					<p className='text-foreground-lighter'>{description}</p>
					<Link
						href='mailto:MarwanShehata@outlook.com'
						className='text-foreground-lighter underline hover:text-foreground'
						aria-label='Contact ME!'
						target='_blank'
						rel='noopener noreferrer'
						title='Contact ME!'
					>
						MarwanShehata@outlook.com
					</Link>
				</Section>
				<Section delay={0.2}>
					<Suspense fallback={null}>
						{/* When you are ready, you will replace this div with the actual form */}
						{/* <div>Contact form coming soon...</div> */}
						<ContactForm />
					</Suspense>
				</Section>
			</ReCaptchaProvider>
		)
	} catch (_error) {
		return <div>Error loading contact page.</div>
	}
}

export default Contact
