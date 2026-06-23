# Sengaigibon — Personal Portfolio

A multilingual personal portfolio website built with Next.js, statically exported and deployed to GitHub Pages. It showcases professional experience, technical skills, mountaineering expeditions, and photography.

**Live site:** [sengaigibon.github.io](https://sengaigibon.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| UI | React 19, Material UI 7, Tailwind CSS |
| Language | TypeScript 5 |
| i18n | next-intl 4 (English, Spanish, German) |
| Package manager | pnpm 10 |
| Runtime | Node.js 22 |
| Hosting | GitHub Pages |

---

## Project Structure

```
app/
├── components/         # Shared UI components (Header, Footer, TechSkills, StackOfCards)
├── [locale]/           # Locale-prefixed routes
│   ├── page.tsx        # Home / portfolio page
│   └── realme/         # Personal section
│       ├── page.tsx    # Mountaineering & photography hub
│       └── mountaineering/page.tsx
├── api/                # API routes (weather)
└── styles/             # MUI theme

messages/               # Translation files (en.json, es.json, de.json)
public/                 # Static assets, images, resume PDF
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Redirects to preferred locale |
| `/en/` `/es/` `/de/` | Home — intro, infographics, slide deck, tech skills |
| `/{locale}/realme/` | Personal interests hub |
| `/{locale}/realme/mountaineering/` | Mountain expedition portfolio |

---

## Development

### Prerequisites

- [Node.js 22+](https://nodejs.org/)
- [pnpm 10+](https://pnpm.io/installation)

### Running locally

```bash
# Clone the repository
git clone https://github.com/sengaigibon/sengaigibon.github.io.git
cd sengaigibon.github.io

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000/en/](http://localhost:3000/en/) in your browser.

### Building for production

```bash
pnpm build
```

The static site is exported to the `out/` directory.

---

## Deployment

Pushes to the `main` branch automatically trigger a GitHub Actions workflow that:

1. Installs dependencies with pnpm
2. Builds the site (`next build`) — outputs to `out/`
3. Deploys the `out/` directory to GitHub Pages

The `PAGES_BASE_PATH` environment variable is injected at build time to set the correct `basePath` for the GitHub Pages subdirectory.

---

## Internationalization

The site supports three locales configured in [`routing.ts`](routing.ts):

- `en` — English (default)
- `es` — Spanish
- `de` — German

The middleware in [`middleware.ts`](middleware.ts) handles automatic locale detection and redirection. All user-facing strings live in [`messages/`](messages/).

---

## Previous README

> This is a Next.js website which can be deployed to GitHub Pages as a static site.
>
> ### Running locally
>
> 1. Clone the Git project into your local environment
> 2. Install `pnpm`
> 2. Install the project dependencies executing `pnpm install`
> 3. Run it with `pnpm dev`
>
> Congratulations! You should have an URL like:
>
> ```bash
> http://localhost:3000/en/
> ```
