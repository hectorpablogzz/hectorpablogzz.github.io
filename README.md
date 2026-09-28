# hectorpablogzz.github.io

Personal portfolio of Héctor Pablo González Espinosa, built with React and Vite.

## Development

```bash
npm install
npm run dev
```

## Editing content

All text (experience, projects, skills, awards) lives in [`src/data.js`](src/data.js). Styles are in [`src/index.css`](src/index.css).

## Deployment

Pushing to `main` builds the site and publishes it through GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
