# [Personal Portfolio](https://marwanshehata.vercel.app/)

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It uses MDX for content management and is deployed on Vercel.

## Features

-   **Framework**: Built with [Next.js](https://nextjs.org/) for a fast and optimized web experience.
-   **Styling**: Styled with [Tailwind CSS](https://tailwindcss.com/) for a modern and responsive design.
-   **Content**: Content is managed with [MDX](https://mdxjs.com/), allowing for the use of React components in Markdown.
-   **Email**: Uses [React Email](https://react.email/) and [Resend](https://resend.com/) for the contact form.
-   **Rate Limiting**: Implements rate limiting with [Upstash Redis](https://upstash.com/redis) to prevent abuse.
-   **Analytics**: Integrated with [Vercel Analytics](https://vercel.com/analytics) to track website traffic.
-   **Linting and Formatting**: Uses [Biome](https://biomejs.dev/) for linting and formatting to maintain code quality.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [pnpm](https://pnpm.io/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/MarwanShehata/portfolio.git
    ```
2.  Install NPM packages
    ```sh
    pnpm install
    ```
3.  Start the development server
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

-   [Next.js](https://nextjs.org/) - React framework for production
-   [TypeScript](https://www.typescriptlang.org/) - Static type checker for JavaScript
-   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
-   [MDX](https://mdxjs.com/) - Markdown for the component era
-   [React Email](https://react.email/) - Build and send emails with React
-   [Resend](https://resend.com/) - Email for developers
-   [Upstash Redis](https://upstash.com/redis) - Serverless Redis database
-   [Biome](https://biomejs.dev/) - Linter, formatter, and more for web projects
-   [Vercel](https://vercel.com/) - Platform for deploying and hosting web applications

## Project Structure

```
/
├── app/              # Main application code
├── components/       # Reusable React components
├── content/          # MDX content for pages and blog posts
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and libraries
├── public/           # Static assets
├── .gitignore        # Files to be ignored by Git
├── biome.json        # Biome configuration
├── next.config.ts    # Next.js configuration
├── package.json      # Project dependencies and scripts
├── postcss.config.mjs# PostCSS configuration
├── README.md         # This file
└── tsconfig.json     # TypeScript configuration
```

## Content Management

This portfolio uses `content-collections` to manage content. The content is written in MDX and is located in the `content` directory.

-   **Blog Posts**: `content/blog/*.mdx`
-   **Pages**: `content/pages/*.mdx`

Each MDX file contains frontmatter at the top, which is used to provide metadata for the content. For example, a blog post might have the following frontmatter:

```mdx
---
title: A Blog Post
description: This is a short summary/description.
date: 04-20-2025
---

## Contact

Marwan Shehata - [@MarwanShehata](https://twitter.com/MarwanShehata) - MarwanShehata@outlook.com

LinkedIn: [https://www.linkedin.com/in/marwanshehata/](https://www.linkedin.com/in/marwanshehata/)