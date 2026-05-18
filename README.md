# Allianz Technology America - Data & AI Transformation Agent Hub

Static front-end prototype for a Data & AI Transformation Office agent hub. The app is built with plain HTML, CSS, and JavaScript, so it can run directly from GitHub Pages without a build step.

## Application Intent

This prototype shows how a Data & AI Transformation Office could coordinate enterprise AI adoption inside a regulated insurance technology organization. It is designed as an executive-facing concept app, not a production system.

The goal is to make the operating model for trusted AI easier to understand: which AI initiatives exist, which domains are ready to scale, where governance risks are emerging, which agents support the transformation lifecycle, and what leaders should act on next.

The experience is intentionally framed around insurance and financial-services transformation themes, including claims, underwriting, risk, operations, customer experience, data products, responsible AI controls, adoption, and value realization.

## What The App Demonstrates

- An executive cockpit for tracking AI readiness, value potential, active initiatives, and governed agent activity
- A portfolio of specialized transformation agents that support use-case discovery, data readiness, governance, delivery, adoption, and value tracking
- A repeatable enablement factory workflow from opportunity discovery through governed scale
- A responsible AI governance view with risk queues and control checklists
- A leadership copilot that answers common executive questions with prebuilt logic

## Intended Audience

This prototype is useful for:

- Data and AI transformation leaders
- Enterprise architecture and governance teams
- Insurance operations and technology stakeholders
- Executive sponsors evaluating AI operating models
- Teams discussing how agentic AI could support regulated enterprise transformation

## Prototype Scope

The app is a static demonstration. It does not connect to live enterprise systems, real governance workflows, model registries, internal data catalogs, or production AI services. The metrics, agents, chat responses, and risk examples are illustrative and meant to support storytelling, demos, and early concept alignment.

## Live Demo

The deployed GitHub Pages version is available at:

```text
https://shaxami.github.io/allianz-agent-hub-site/
```

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
