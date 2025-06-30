'use client'

import { useMounted } from '@/hooks/use-mounted'
import { useEffect, useState } from 'react'

export const LocalTime = () => {
	const mounted = useMounted()
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const render = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'America/Los_Angeles',
	}).format(time)

	if (!mounted) {
		return null
	}

	return (
		<p className='hidden text-foreground-lighter tabular-nums sm:block'>
			{render}
		</p>
	)
}
