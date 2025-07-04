'use client'

import { cn } from '@/lib/utils'
import { Monitor, Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-collapse after a delay
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(false)
      }, 3000) // Auto-collapse after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [isExpanded])

  // Handle container interactions
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseEnter = () => setIsExpanded(true)
    const handleMouseLeave = () => setIsExpanded(false)
    const handleTouchStart = () => setIsExpanded(true)

    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchstart', handleTouchStart)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    {
      key: 'system',
      icon: Monitor,
      label: 'System theme',
    },
    {
      key: 'light',
      icon: Sun,
      label: 'Light theme',
    },
    {
      key: 'dark',
      icon: Moon,
      label: 'Dark theme',
    },
  ]

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed right-5 bottom-4 flex h-7 overflow-hidden rounded-full p-0.5 ring-1 ring-border transition-all',
        // Expand on hover or when expanded state is true
        isExpanded ? 'max-w-[100px]' : 'max-w-7',
        'hover:max-w-[100px]',
        theme === 'system' && 'justify-start',
        theme === 'light' && 'justify-center',
        theme === 'dark' && 'justify-end'
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key

        return (
          <button
            type='button'
            key={key}
            className='relative size-6 shrink-0 cursor-pointer rounded-full'
            onClick={() => setTheme(key)}
            aria-label={label}
          >
            {isActive && (
              <motion.div
                layoutId='activeTheme'
                className='absolute inset-0 rounded-full bg-secondary'
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                'relative m-auto h-4 w-4',
                isActive ? 'text-foreground' : 'text-foreground-lighter'
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
