# Personal Academic Website

Personal academic website of Dr. Areej Salaymeh — research in machine learning, data science, and intelligent systems.

## Tech Stack

Pure HTML5 + CSS3 + Vanilla JS, with a green academic theme (serif typography, two-column layout) inspired by classic faculty pages. No build step required. Hosted on GitHub Pages.

## File Structure

```
/
├── index.html          — Home page
├── research.html       — Research interests
├── publications.html   — Publications list
├── teaching.html       — Courses taught
├── contact.html        — Contact information
└── assets/
    ├── css/style.css   — All styles
    ├── js/main.js      — Navigation & interactions
    └── img/profile.jpg — Profile photo
```

## Local Development

Open any `.html` file directly in a browser — no server needed.

## GitHub Pages Setup

1. Go to **Settings → Pages** in this repo
2. Set Source: **Deploy from a branch**, Branch `main`, folder `/ (root)`
3. Leave **Custom domain** empty to serve at `https://<user>.github.io/website/`

## Updating Content

- **Add publications:** Edit `publications.html` — follow the commented template inside the file
- **Update news:** Edit the `<ul class="news">` in `index.html`
- **Add social links:** Replace the placeholder URLs in the Google Scholar, LinkedIn, and ORCID links
