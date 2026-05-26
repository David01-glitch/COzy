# Cozy Hobby Corner

A warm, lightweight hobby blog for seniors — painting, knitting, woodworking, puzzles, and DIY crafts.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Express.js + compression (production server)

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the Vite dev server on `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a production bundle to `dist/`.

## Production Server

```bash
npm start
```

Serves the built site through Express with gzip compression on `PORT` (defaults to 3000).

## Deployment

The repo includes a `Procfile` and `app.json` ready for Heroku, Railway, or Render. Any host that supports Node 18+ works:

1. Connect the repo.
2. Set the build command to `npm install && npm run build`.
3. Set the start command to `npm start`.

## Project Structure

```
src/
  assets/images/   – locally hosted real images
  components/      – Navbar, Footer, FAQ, ExpandableCard, etc.
  data/            – static content (categories, articles, etc.)
  pages/           – Home, About, Blog, Community, Resources, Contact, Category, Legal
  utils/           – analytics helpers
```

## Notes

- All images are stored locally in `src/assets/images/`.
- Read More / Explore expand inline (no modals, no new pages).
- Google Analytics tag is in `index.html` and `src/utils/analytics.js`.
- Cookie consent, Privacy, Terms, and Refund pages are included for Google Ads compliance.
