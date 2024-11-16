Steps to replicate this setup

## Create new remix app

```bash
npm create remix@latest
```

## Install dependencies

```bash
pnpm install
```

## Setup Prettier

```bash
pnpm add prettier --save-dev
touch .prettierrc
```

## Setup Tailwind

```bash
pnpm add @tailwindcss/typography @tailwindcss/forms prettier-plugin-tailwindcss
```

### Add to tailwind.config.ts

```ts
{
    ...,
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
```

### Add to .prettierrc

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Install utilities

```bash
pnpm add clsx pretty-cache-header
```

## Setup ESLint

```bash
pnpm create @eslint/config@latest
```

## Setup .cursorrules

```bash
touch .cursorrules
```

Then add your coding styles and information about your project.

## Setup Plausible

- add Plausible proxy via [`app/routes/api.event.ts`](../app/routes/api.event.ts) for tracking the pageviews
- add Plausible script proxy via [`app/routes/js.script.js`](../app/routes/js.script.js)
- add Plausible tracking function via [`app/lib/plausible.ts`](../app/lib/plausible.ts)
- add script to `app/root.tsx`:

```tsx
<script
  defer
  data-api="/api/event"
  src="/js/script.js"
  data-domain={config.productionDomain}
></script>
```

## Setup Meta/SEO/OG

Files to add/update:

- [app/config.ts](../app/config.ts)
- [app/root.tsx](../app/root.tsx)
- Sitemap: [app/routes/[sitemap.xml].tsx](../app/routes/%5Bsitemap.xml%5D.tsx)
- Robots: [app/routes/[robots.txt].tsx](../app/routes/robots.txt.tsx)
- Webmanifest: [app/routes/[webmanifest.json].tsx](../app/routes/%5Bwebmanifest.json%5D.tsx)
- other
  - icons
  - theme colors
  - metas
  - webmanifest
  - og meta tags
