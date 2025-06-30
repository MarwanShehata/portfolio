type StackItem = {
  name: string
  description: string
  href: string
  affiliate?: boolean
  featured?: boolean
  imageHref?: string
}

export const stack: StackItem[] = [
  {
    name: 'Next.js',
    description: 'React framework for production apps with SSR and more',
    href: 'https://nextjs.org',
    featured: true,
  },
  {
    name: 'React',
    description: 'Library for building user interfaces',
    href: 'https://react.dev',
    featured: true,
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript at any scale',
    href: 'https://www.typescriptlang.org',
    featured: true,
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    href: 'https://tailwindcss.com',
    featured: true,
  },
  {
    name: 'Biome.js',
    description: 'Format, lint, and more in a fraction of a second.',
    href: 'https://biomejs.dev/',
  },
  {
    name: 'MDX',
    description: 'Markdown components for Next.js',
    href: 'https://mdxjs.com',
    featured: true,
  },
  {
    name: 'Prisma',
    description: 'Next-gen ORM for Node.js and TypeScript',
    href: 'https://www.prisma.io',
    featured: true,
  },
  {
    name: 'Zustand',
    description: 'Bear necessities for global state in React',
    href: 'https://zustand-demo.pmnd.rs',
    featured: true,
  },
  {
    name: 'React Query',
    description: 'Hooks for fetching, caching and updating async data',
    href: 'https://tanstack.com/query',
  },
  {
    name: 'Lucia',
    description: 'Authentication library for TypeScript and JavaScript apps',
    href: 'https://lucia-auth.com',
  },
  {
    name: 'PostgreSQL',
    description: 'Powerful open source relational database system',
    href: 'https://www.postgresql.org',
  },
  {
    name: 'Supabase',
    description: 'The open source Firebase alternative',
    href: 'https://supabase.com',
  },
  {
    name: 'Shadcn/ui',
    description: 'Beautifully designed UI components using Tailwind CSS',
    href: 'https://ui.shadcn.com',
  },
  {
    name: 'Radix UI',
    description: 'Primitives for building accessible design systems',
    href: 'https://www.radix-ui.com',
  },
  {
    name: 'Vercel',
    description: 'Deploy Next.js sites and serverless functions with ease',
    href: 'https://vercel.com',
  },
  {
    name: 'VS Code',
    description: 'Code editing. Redefined.',
    href: 'https://code.visualstudio.com',
  },
  {
    name: 'GitHub',
    description: 'Where the world builds software',
    href: 'https://github.com',
  },
  {
    name: 'Figma',
    description: 'Collaborative interface design tool',
    href: 'https://figma.com',
  },
  {
    name: 'Node.js',
    description: "JavaScript runtime built on Chrome's V8 engine",
    href: 'https://nodejs.org',
  },
]
