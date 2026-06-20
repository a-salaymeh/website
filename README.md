# areejsalaymeh.com — Personal Academic Website

Personal website of Dr. Areej Salaymeh, Assistant Professor of Information Technology at Lawrence Technological University.

## Tech Stack

Pure HTML5 + CSS3 + Vanilla JS. No build step required. Hosted on GitHub Pages with a custom domain.

## File Structure

```
/
├── index.html          — Home page
├── research.html       — Research interests
├── publications.html   — Publications list
├── teaching.html       — Courses taught
├── contact.html        — Contact information
├── assets/
│   ├── css/style.css   — All styles
│   ├── js/main.js      — Navigation & interactions
│   └── img/profile.jpg — Profile photo
└── CNAME               — Custom domain
```

## Local Development

Open any `.html` file directly in a browser — no server needed.

## GitHub Pages Setup

1. Go to **Settings → Pages** in this repo
2. Set Source: `main` branch, `/ (root)`
3. The `CNAME` file handles `areejsalaymeh.com` automatically

## GoDaddy DNS Setup

In your GoDaddy DNS settings, add the following records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | a-salaymeh.github.io   |

DNS propagation takes 24–48 hours. After that, `areejsalaymeh.com` will serve this site.

## Updating Content

- **Add publications:** Edit `publications.html` — follow the commented template inside the file
- **Update news:** Edit the `<ul class="news-list">` in `index.html`
- **Add social links:** Replace `#` placeholders in Google Scholar, LinkedIn, ORCID links
- **Update CV link:** Add a `cv.pdf` to the root and link the "CV" button in `index.html`
