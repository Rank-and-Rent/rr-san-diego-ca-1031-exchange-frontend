This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Taxonomy Rationale

The taxonomy for this 1031 exchange website is designed to support nationwide replacement property identification while maintaining focus on core single tenant retail properties. Services are organized into seven categories: Timelines (forward, reverse, simultaneous, delayed exchanges), Structures (build-to-suit, improvement, multi-property, partial exchanges), Execution (property identification, qualified intermediary, qualified escrow, exchange coordination), Tax (boot calculation, depreciation recapture, state tax considerations), Reporting (Form 8824 preparation, exchange documentation), Property Paths (NNN, retail, industrial property identification), and Education (exchange education, consultation). Property types emphasize the eight core untouchables (convenience store gas, drive-thru QSR, pharmacy, dollar store, coffee drive-thru, auto parts retail, hard discount grocer, ground lease outparcel) with strategic additions based on market characteristics. Locations include San Diego and surrounding areas within 30-45 miles, plus remote support for nationwide identification. This structure enables comprehensive coverage of exchange scenarios while prioritizing the most common and reliable replacement property types for investors seeking passive income through NNN leases.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment variables

Contact forms now rely on Cloudflare Turnstile. Add the following keys to your `.env.local` (or hosting provider) before running the site:

```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_public_site_key
TURNSTILE_SECRET_KEY=your_server_side_secret
```

Without both values the CAPTCHA widget will not render and `/api/contact` will reject submissions.
