'use server'

import { env } from '@/lib/env'
import { resend } from '@/lib/resend'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'

// const verifyRecaptcha = async (token: string) => {
// 	// console.log(env)
// 	const recaptchaUrl = new URL(
// 		'https://www.google.com/recaptcha/api/siteverify',
// 	)
// 	recaptchaUrl.searchParams.set('secret', env.RECAPTCHA_SECRET_KEY)
// 	recaptchaUrl.searchParams.set('response', token)

// 	const recaptchaResponse = await fetch(recaptchaUrl, {
// 		method: 'POST',
// 	})

// 	const recaptchaJson = await recaptchaResponse.json()

// 	if (!recaptchaJson.success) {
// 		return {
// 			error: 'Please verify that you are human.',
// 			message: '',
// 		}
// 	}
// }

export const contact = async (
	formData: FormData,
): Promise<{
	message: string
	error: string
}> => {
	const head = await headers()

	const ip = head.get('x-forwarded-for')
	const redis = Redis.fromEnv()
	const ratelimit = new Ratelimit({
		redis,
		// rate limit to 10 requests per hour
		limiter: Ratelimit.slidingWindow(10, '1h'),
	})

	const { success } = await ratelimit.limit(`ratelimit_${ip}`)

	if (!success) {
		return {
			error: 'You have reached your request limit. Please try again later.',
			message: '',
		}
	}

	const { name, email, message, subject, token } = Object.fromEntries(formData)

	// This is a honeypot field - if it's filled, it's likely a bot.
	// Fuck you, bots.
	if (typeof subject === 'string' && subject.length) {
		return {
			message: 'Thanks! Your message has been sent.',
			error: '',
		}
	}

	if (
		typeof name !== 'string' ||
		typeof email !== 'string' ||
		typeof message !== 'string'
	) {
		return {
			error: 'Please fill in all fields.',
			message: '',
		}
	}

	// if (typeof token !== 'string') {
	// 	return {
	// 		error: 'Please verify that you are human.',
	// 		message: '',
	// 	}
	// }

	// const recaptchaResult = await verifyRecaptcha(token)

	// if (recaptchaResult?.error) {
	// 	return recaptchaResult
	// }

	const response = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: env.RESEND_TO,
		subject: `New message from ${name}`,
		replyTo: email,
		text: message,
	})

	if (response.error) {
		return {
			error: response.error.message,
			message: `${response.error.message} Please try again later.`,
		}
	}

	revalidatePath('/contact')

	return {
		message: 'Thanks! Your message has been sent.',
		error: '',
	}
}
