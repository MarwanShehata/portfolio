type SocialLink = {
	label: string
	href: string
	follow: boolean
	invert: boolean
}

export const social: Record<string, SocialLink> = {
  x: {
    label: 'X',
    href: 'https://x.com/Mrwan_Shehata/',
    follow: true,
    invert: true,
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/MarwanShehata',
    follow: true,
    invert: true,
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/MarwanShehata',
    follow: true,
    invert: true,
  },
  projectRepo: {
    label: 'portfolio repo',
    href: 'https://github.com/MarwanShehata/portfolio',
    follow: true,
    invert: true,
  },
}
