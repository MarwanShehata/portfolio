import type { ReactNode } from 'react'
import { Link } from './link'

type CardProps = {
  title: string
  period?: string
  role?: string
  href?: string
  children?: ReactNode
}

export const Card = ({ title, period, role, href, children }: CardProps) => {
  const content = (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between gap-2'>
        <p className='font-medium text-foreground'>{title}</p>
        {period && <p className='text-foreground-lighter text-sm'>{period}</p>}
      </div>
      {role && <p className='text-foreground-light text-sm'>{role}</p>}
      {children && (
        <div className='mt-2 text-foreground-lighter text-sm [&>ul]:list-disc [&>ul]:pl-4'>
          {children}
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className='block rounded-lg border border-border bg-transparent p-4 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800'
        aria-label={title}
      >
        {content}
      </Link>
    )
  }

  return (
    <div className='rounded-lg border border-border bg-transparent p-4'>
      {content}
    </div>
  )
}
