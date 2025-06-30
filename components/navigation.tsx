'use client'

import { Link } from '@/components/link'
import { social } from '@/lib/social'
import { cn } from '@/lib/utils'
import { Github } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { LocalTime } from './local-time'

const links = [
	{
		href: '/',
		label: 'Home',
		active: (pathname: string) => pathname === '/',
	},
	{
		href: '/about',
		label: 'About',
		active: (pathname: string) => pathname.startsWith('/about'),
	},
	{
		href: '/work',
		label: 'Work',
		active: (pathname: string) => pathname.startsWith('/work'),
	},
	{
		href: '/projects',
		label: 'Projects',
		active: (pathname: string) => pathname.startsWith('/projects'),
	},
	{
		href: '/blog',
		label: 'Blog',
		active: (pathname: string) => pathname.startsWith('/blog'),
	},
	{
		href: '/contact',
		label: 'Contact',
		active: (pathname: string) => pathname.startsWith('/contact'),
	},
]

export const Navigation = () => {
	const pathname = usePathname()

	return (
		<nav className='flex items-center justify-between text-xs'>
			<div className='flex items-center gap-4'>
				<LocalTime />
				<Link
					href={social.github.href}
					className='text-secondary'
					aria-label='GitHub'
				>
					<Github size={16} color='#fff' />
				</Link>
			</div>
			<ul className='flex gap-4'>
				{links.map(({ href, label, active }) => (
					<li key={href}>
						<Link
							href={href}
							className={cn(active(pathname) ? 'text-primary' : 'border-none')}
							aria-label={label}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
