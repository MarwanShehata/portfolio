import { Post } from '@/components/post'
import { Section } from '@/components/section'
import { createMetadata } from '@/lib/metadata'
import { allPosts as originalPosts } from 'content-collections'
import type { Metadata } from 'next'

// Ensure all posts have a valid Date object
const allPosts = originalPosts.map((post) => ({
	...post,
	date: new Date(post.date),
}))

// Helper function to validate date
const isValidDate = (date: unknown): date is Date => {
	return date instanceof Date && !Number.isNaN(date.getTime())
}

// Find all posts with invalid dates

// Filter to only valid posts
const validPosts = allPosts.filter((post) => {
	const isValid = isValidDate(post.date)
	return isValid
})

// Process valid posts
const postsByYear = validPosts
	.sort((a, b) => {
		try {
			return b.date.getTime() - a.date.getTime()
		} catch (_error) {
			return 0
		}
	})
	.reduce(
		(acc, post) => {
			try {
				const year = post.date.getFullYear()
				if (!acc[year]) {
					acc[year] = []
				}
				acc[year].push(post)
				return acc
			} catch (_error) {
				return acc
			}
		},
		{} as Record<number, typeof validPosts>,
	)

const title = 'Blog'
const description = 'Thoughts, stories and ideas.'

export const metadata: Metadata = createMetadata({
	title,
	description,
	ogText: 'My blog — thoughts, stories and ideas.',
})

const Posts = () => {
	// Additional runtime check
	if (validPosts.length === 0) {
		return (
			<Section className='gap-0'>
				<h1>{title}</h1>
				<p className='text-foreground-lighter'>
					No posts found with valid dates.
				</p>
			</Section>
		)
	}

	return (
		<>
			<Section className='gap-0'>
				<h1>{title}</h1>
				<p className='text-foreground-lighter'>{description}</p>
			</Section>
			{Object.entries(postsByYear)
				.sort(([a], [b]) => Number(b) - Number(a))
				.map(([year, posts], index) => (
					<Section key={year} delay={(index + 1) * 0.2}>
						<h2 className='font-normal text-foreground-lighter text-sm'>
							{year}
						</h2>
						<ul className='grid gap-6'>
							{posts.map((post) => {
								// Additional safety check per post
								if (!isValidDate(post.date)) {
									return null
								}
								return (
									<li key={post._meta.path}>
										<Post {...post} />
									</li>
								)
							})}
						</ul>
					</Section>
				))}
		</>
	)
}

export default Posts
