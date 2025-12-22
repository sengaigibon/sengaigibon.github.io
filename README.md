# Sengaigibon Website

This is a Next.js website which can be deployed to GitHub Pages as a static site.

## Running locally

1. Clone the Git project into your local environment
2. Install `pnpm`
2. Install the project dependencies executing `pnpm install`
3. Run it with `pnpm dev`

Congratulations! You should have an URL like:

```bash
http://localhost:3000/en/
```

## Weather dashboard

- Route: `/check-weather` (will redirect to `/<locale>/check-weather`)
- Requires env var: `METEOBLUE_API_KEY`
	- Local: put it in `.env.local` (this repo already ignores `.env*.local`)
		```bash
		METEOBLUE_API_KEY=your_key_here
		```
- With `output: 'export'`, weather data is generated at build time (so the key must be present when running `pnpm build`).