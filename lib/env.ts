import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		RESEND_AUDIENCE_ID: z.string().min(1).optional(),
		RESEND_TOKEN: z.string().startsWith('re_').optional(),
		RESEND_TO: z.string().email(),
		RECAPTCHA_SECRET_KEY: z.string().min(1),
		UPSTASH_REDIS_REST_URL: z.string().url().optional(),
		UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
		// Added by Vercel
		VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1).optional(),
	},
	client: {
		NEXT_PUBLIC_LOGO_DEV_TOKEN: z.string().startsWith('pk_').optional(),
		NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1).optional(),
	},
	runtimeEnv: {
		RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
		RESEND_TOKEN: process.env.RESEND_TOKEN,
		RESEND_TO: process.env.RESEND_TO,
		VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
		NEXT_PUBLIC_LOGO_DEV_TOKEN: process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN,
		NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
		RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
		UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
		UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
	},
	// Skip validation during build if using placeholder values
	skipValidation:
		process.env.NODE_ENV === 'development' ||
		process.env.SKIP_ENV_VALIDATION === 'true',
})
