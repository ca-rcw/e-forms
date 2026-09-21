# College of Agriculture E-Form Generator

Official web application for the F-TGN thesis forms of the College of Agriculture, Agusan del Sur State University (ADSSU).

## Current scope

- Homepage with the complete F-TGN form catalogue
- Search and category filters
- Responsive desktop and mobile layout
- Working generators from F-TGN-001 through F-TGN-007B
- ADSSU and College of Agriculture branding

## Local development

Requirements: Node.js 22.13 or later and pnpm 11.25.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

The homepage source is in `app/`. Institutional assets and the currently available form generator are in `public/`.

## Existing form archive

The repository's original `F-TGN-001/index.html` is retained separately for continuity. The homepage application opens the deployed copy at `public/forms/f-tgn-001.html`.

## Published websites

- GitHub Pages: `https://ca-rcw.github.io/e-forms/`
- ChatGPT Sites: `https://adssu-eform-generator.dabdabdesu.chatgpt.site`

Updates merged into `main` are automatically built and deployed to GitHub Pages by the workflow in `.github/workflows/deploy-pages.yml`.
