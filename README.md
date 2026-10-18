# Kirolos Magdy — Portfolio

A dark, interactive 3D portfolio showcasing my work as a **Data Engineer**, **Analytics Engineer**, and **Data Analyst**.

🔗 **Live site:** [kirolosmagdy.netlify.app](https://kirolosmagdy.netlify.app)

## Highlights

- **Role-based experience:** switch between three roles, each with its own CV, skills, and relevant projects.
- **Project deep-dives:** every project opens in a detailed panel with a pipeline diagram, key results, tech stack, and GitHub link.
- **Interactive 3D background:** a Three.js particle scene that morphs with the selected role.
- **Shareable role links:** open a specific role directly, e.g. `/#data-engineer`, `/#analytics-engineer`, or `/#data-analyst`.
- **Downloadable CVs** and a working contact form (Netlify Forms).
- **Responsive**, with keyboard and swipe navigation.

## Tech Stack

HTML · CSS · JavaScript · Three.js — no frameworks, no build step. Deployed on Netlify.

## Project Structure

```
index.html          Page layout
assets/js/data.js   All content (roles, projects, skills, timeline)
assets/js/main.js   Rendering and interactions
assets/js/scene.js  Three.js particle scene
assets/css/         Styles
assets/cv/          Downloadable CVs
```

## Run Locally

```bash
git clone https://github.com/kirlosmagdy/my_portfolio.git
cd my_portfolio
```

Open `index.html` in your browser. No server or install needed.

## Customize

All content lives in `assets/js/data.js`. Add a project to `PROJECTS`, then list its key under a role's `projects`. Colors are set at the top of `assets/css/style.css`.

## Contact

- LinkedIn: [kirolos-magdy1](https://linkedin.com/in/kirolos-magdy1/)
- GitHub: [@kirlosmagdy](https://github.com/kirlosmagdy)
