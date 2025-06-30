import { social } from '@/lib/social'
import { Link } from './link'

export const Footer = () => (
  <footer className='text-foreground-lighter text-sm leading-relaxed'>
    <p>
      &copy; {new Date().getFullYear()} Marwan Shehata. All rights reserved.
    </p>
    <p>
      View the{' '}
      <Link href={social.github.href} aria-label='View source code on GitHub'>
        source code
      </Link>
      .
    </p>
    <p>
      Visit my linkedin{' '}
      <Link
        href='https://www.linkedin.com/in/marwanshehata/'
        aria-label='Visit my linkedin profile'
      >
        @MarwanShehata
      </Link>{', '}
      or call me on{' '}
      <Link href='tel:+201121255131' aria-label='Call me on +201121255131'>
        +201121255131
      </Link>
    </p>
  </footer>
)
