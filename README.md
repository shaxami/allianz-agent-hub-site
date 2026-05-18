# Allianz Technology America - Data & AI Transformation Agent Hub

Static front-end prototype for a Data & AI Transformation Office agent hub. The app is built with plain HTML, CSS, and JavaScript, so it can run directly from GitHub Pages without a build step.

## Run Locally

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deploy With GitHub Pages

1. Create a new GitHub repository.
2. Push these files to the repository's `main` branch.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. The included workflow publishes the site automatically after each push to `main`.

The live URL will look like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Project Files

- `index.html` - page structure and app sections
- `styles.css` - Allianz-inspired interface styling
- `app.js` - navigation, agent cards, workflow interactions, governance panels, and copilot responses
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Notes

This is an Allianz-inspired concept prototype. It does not include or reproduce official proprietary Allianz brand assets.
