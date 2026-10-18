# Kirolos Magdy — Portfolio

A dark, 3D portfolio site with no build step: plain HTML + CSS + JavaScript, plus Three.js (bundled locally). Works by double-clicking `index.html`, with no server needed.

## Structure
```
index.html              → page skeleton (hero, about, contact…)
assets/js/data.js       → ALL content: roles, projects, skills, timeline, Projects-section list
assets/js/main.js       → renders content + interactions (tilt, modal, filters, form)
assets/js/scene.js      → Three.js particle scene that morphs per role
assets/vendor/          → three.js + fonts (offline, no internet needed)
assets/css/style.css    → styles (warm black + amber accent + teal secondary)
assets/cv/*.pdf         → the 3 downloadable CVs
assets/img/             → portrait cut-out, CV previews, favicon
```

## How the Roles section works
* The three roles sit side by side as 3D cards (on phones they scroll sideways).
* Clicking a card flips it over to show its key numbers, then opens that role's details underneath: its CV (preview + download), skills and every project listed in that CV.
* Clicking any project card (in a role or in the Projects section) zooms it into a large panel with the pipeline diagram, all bullet points, the stack and the GitHub link. Use the arrows (or ← →) to move between projects, and Esc to close.
* Switch roles with the tabs, the ← → arrows (keyboard arrows also work), or a swipe on phones. ✕ or `Esc` closes it.
* **Share a link to one role:** `kirolosmagdy.netlify.app/#data-analyst` (or `#data-engineer`, `#analytics-engineer`) opens the page with that role already open, handy when you apply for a specific job.

## Update content
* **Add or edit a project:** add it to `PROJECTS` in `data.js`, then put its key in a role's `projects: [...]` list. Role-specific bullet points (copied from that CV) go in the role's `points: { key: [...] }`, the tools written in brackets in that CV go in `stack: { key: [...] }`, and an optional label override goes in `tags: { key: "..." }`. `flow: [...]` is the pipeline diagram shown when the project is opened.
* **Projects section:** `SPOTLIGHT` is the wide client-work card on top (the freelance lead-generation project); `FEATURED` are the 8 cards below it (two rows of four). The role filter tabs and their counts are built automatically from each role's `projects` list, and rows are always filled evenly (e.g. 5 cards = 3 + 2).
* **Freelance profiles (Contact section):** edit the `FREELANCE` list in `data.js` (name, short mark, note, URL).
* **Phone / WhatsApp:** the two buttons in the Contact section are in `index.html` (`wa.me/201207667431` and `tel:+201207667431`).
* **Replace a CV:** overwrite the PDF in `assets/cv/` (keep the same file name). To refresh its preview image, export page 1 as an image to `assets/img/cv-de.webp` / `cv-ae.webp` / `cv-da.webp`.
* **Change the colours:** edit `--accent` (amber `#e39b25`), `--gold` (`#c48014`, italic words) and `--teal` (`#308466`) at the top of `assets/css/style.css`. The 3D particle colours are `PARTICLE_COLORS` in `main.js`.
* **Journey timeline:** edit `TIMELINE` in `data.js`. Each entry has a `type` (`work`, `edu` or `cert`) that sets its label and icon, plus optional `tags` and a `link`.

## Open it on your computer
1. **Extract the zip first** (right-click → *Extract All…*). Don't open `index.html` from inside the zip window, because then the browser can't find the images, CVs and scripts.
2. Double-click `portfolio/index.html` and it opens in your browser.

Note: when the site is opened from a folder, the contact form opens the visitor's email app instead of sending. Once it's live on Netlify, the form sends messages normally.

## Deploy (free) on Netlify — kirolosmagdy.netlify.app
1. Go to https://app.netlify.com → your existing site → **Deploys**.
2. Drag and drop the whole `portfolio` folder onto the page.
3. The contact form works automatically through **Netlify Forms** (messages show up under *Forms* in the dashboard; you can turn on email notifications there). On any other host, the form falls back to opening the visitor's email app.

GitHub Pages / Vercel also work: just publish the folder as-is.
