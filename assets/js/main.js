(function () {
const { PROFILE, PROJECTS, ROLES, TIMELINE, FEATURED, SPOTLIGHT, FREELANCE } = window.PORTFOLIO;

/* =========================================================
   Icons
   ========================================================= */
const S = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>`,
  download: S('<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>'),
  eye: S('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'),
  arrowDown: S('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),
  arrowUpRight: S('<path d="M7 17 17 7"/><path d="M8 7h9v9"/>'),
  external: S('<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),
  close: S('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  mail: S('<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/>'),
  phone: S('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>'),
  send: S('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'),
  cap: S('<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>'),
  shield: S('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>'),
  bolt: S('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>'),
  layers: S('<path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
  spark: S('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
  database: S('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>'),
  schema: S('<rect x="9" y="9" width="6" height="6" rx="1"/><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="17" y="2" width="5" height="5" rx="1"/><rect x="2" y="17" width="5" height="5" rx="1"/><rect x="17" y="17" width="5" height="5" rx="1"/><path d="M7 7l2 2M17 7l-2 2M7 17l2-2M17 17l-2-2"/>'),
  chart: S('<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6" rx="1"/><rect x="12" y="8" width="3" height="10" rx="1"/><rect x="17" y="5" width="3" height="13" rx="1"/>'),
  azure: S('<path d="M13 3 6 20H2L9 6l4-3Z"/><path d="M14 8l8 12H9l6-3-3-5 2-4Z"/>'),
  bigdata: S('<circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M6 7l3.5 3M18 7l-3.5 3M6 17l3.5-3M18 17l-3.5-3"/>'),
  ibm: S('<path d="M3 6h18M3 10h18M3 14h18M3 18h18" stroke-dasharray="3 2"/>'),
  folder: S('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>'),
  arrowLeft: S('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),
  arrowRight: S('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
  briefcase: S('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>'),
  award: S('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>'),
  expand: S('<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>'),
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.2 8.2 0 1 1 6.94 3.84Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.31c-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.2 3.7.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z"/></svg>`,
  flip: S('<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>'),
};
const ROLE_ICON = { "data-engineer": "database", "analytics-engineer": "schema", "data-analyst": "chart" };
const hydrateIcons = (root = document) => root.querySelectorAll("[data-icon]").forEach((el) => { if (!el.innerHTML.trim()) el.innerHTML = ICONS[el.dataset.icon] || ""; });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const pad = (n) => String(n).padStart(2, "0");
const fileName = (p) => p.split("/").pop();

const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const PARTICLE_COLORS = ["#de9624", "#308466"]; // 3D particles: amber → teal (match --accent / --teal in style.css)
const TYPE = {
  work: { label: "Freelance", icon: "briefcase" },
  edu: { label: "Education", icon: "cap" },
  cert: { label: "Certification", icon: "award" },
};

/* =========================================================
   Render static (non-interactive) content
   ========================================================= */
function render() {
  // hero: role pills (they open the role in the deck)
  $("#heroRoles").innerHTML = ROLES.map((r, i) => `<a href="#${r.id}"><b>${pad(i + 1)}</b>${r.title}</a>`).join("");

  // marquee
  const tech = ["Python", "SQL", "Apache Airflow", "dbt", "Snowflake", "Apache Spark", "Kafka", "Docker", "Power BI", "Tableau", "Azure Data Factory", "Synapse", "Databricks", "PostgreSQL", "SQL Server", "Pandas", "Selenium", "AWS S3", "Hadoop", "Git"];
  const row = tech.map((t) => `<span>${t}</span>`).join("");
  $("#marquee").innerHTML = row + row;

  // role deck (3D flip cards)
  $("#roleDeck").innerHTML = ROLES.map((r, i) => roleCard(r, i)).join("");

  // stage tabs
  $("#stageTabs").innerHTML = ROLES.map((r, i) => `
    <button class="stage-tab" role="tab" data-tab="${i}"><i></i><span>${r.title}</span></button>`).join("");

  // role dock
  $("#roleDock").innerHTML = ROLES.map((r, i) => `<button data-dock="${i}"><i></i><span>${r.title}</span></button>`).join("") +
    `<a class="dock-dl" id="dockDl" href="${ROLES[0].cv}" download aria-label="Download this CV" title="Download this CV">${ICONS.download}</a>`;

  // contact: freelance profiles (Arabic marks/notes get the right direction)
  const ar = (t) => /[\u0600-\u06FF]/.test(t);
  $("#freelanceList").innerHTML = FREELANCE.map((f) => `
    <a class="fl-tile" href="${esc(f.url)}" target="_blank" rel="noopener" aria-label="${esc(f.name)} profile (opens in a new tab)">
      <span class="fl-mark"${ar(f.mark) ? ' lang="ar"' : ""}>${esc(f.mark)}</span>
      <span class="fl-text"><b>${esc(f.name)}</b><small dir="auto">${esc(f.note)}</small></span>
      <span class="fl-go">${ICONS.arrowUpRight}</span>
    </a>`).join("");

  // journey
  const counts = TIMELINE.reduce((m, t) => ((m[t.type] = (m[t.type] || 0) + 1), m), {});
  $("#journeyLegend").innerHTML = Object.entries(TYPE).filter(([k]) => counts[k]).map(([k, t]) =>
    `<span>${ICONS[t.icon]}<b>${counts[k]}</b> ${t.label}${counts[k] > 1 ? (k === "work" ? "" : "s") : ""}</span>`).join("");
  const item = (t, i) => {
    const ty = TYPE[t.type];
    return `
    <div class="tl-item" style="--o:${i}">
      <span class="tl-dot">${ICONS[ty.icon]}</span>
      <div class="tl-card tilt reveal-side" data-tilt="6">
        <div class="tl-top">
          <span class="tl-type">${ICONS[ty.icon]}${ty.label}</span>
          <span class="tl-when mono">${esc(t.when)}</span>
        </div>
        <h4>${esc(t.title)}</h4>
        <div class="tl-org">${esc(t.org)}</div>
        <p>${esc(t.text)}</p>
        ${t.tags ? `<div class="tl-tags">${t.tags.map((g) => `<span>${esc(g)}</span>`).join("")}</div>` : ""}
        ${t.link ? `<a class="tl-link" href="${t.link.url}" target="_blank" rel="noopener">${esc(t.link.label)} ${ICONS.arrowUpRight}</a>` : ""}
      </div>
    </div>`;
  };
  // zig-zag: even items on the left, odd items on the right (single column on mobile, in order)
  $("#timeline").innerHTML =
    `<div class="tl-col left">${TIMELINE.map((t, i) => (i % 2 === 0 ? item(t, i) : "")).join("")}</div>` +
    `<div class="tl-col right">${TIMELINE.map((t, i) => (i % 2 === 1 ? item(t, i) : "")).join("")}</div>`;

  // projects section: role filters + 8 cards (2 rows of 4)
  $("#projFilters").innerHTML =
    `<button class="chip-btn active" role="tab" aria-selected="true" data-filter="all">All <small>${listForFilter("all").length}</small></button>` +
    ROLES.map((r, i) => `<button class="chip-btn" role="tab" aria-selected="false" data-filter="${i}">${r.title} <small>${listForFilter(String(i)).length}</small></button>`).join("");
  renderProjGrid("all", true);

  $("#year").textContent = new Date().getFullYear();
  hydrateIcons();
}

/* projects shown in the Projects grid for a filter ("all" or a role index) */
function projectsFor(filter) {
  if (filter === "all") return FEATURED.slice();
  return ROLES[+filter].projects.filter((k) => FEATURED.includes(k));
}
/* the wide spotlight card is shown when it belongs to the filter */
const spotFor = (filter) => (SPOTLIGHT && (filter === "all" || ROLES[+filter].projects.includes(SPOTLIGHT)) ? SPOTLIGHT : null);
/* everything a filter shows, in order (used for the counts and prev/next in the big view) */
const listForFilter = (filter) => [spotFor(filter), ...projectsFor(filter)].filter(Boolean);
const rolesOf = (key) => ROLES.map((r, i) => (r.projects.includes(key) ? i : -1)).filter((i) => i >= 0);
/* role-specific stack / tag (exactly as written in that CV), with a general fallback */
const stackFor = (key, role) => (role && role.stack && role.stack[key]) || PROJECTS[key].stack;
const tagFor = (key, role) => (role && role.tags && role.tags[key]) || PROJECTS[key].tag;

/* spread n cards over full rows and return a column span (out of 12) for each card:
   8 -> 4+4, 6 -> 3+3, 5 -> 3+2, 7 -> 4+3 ... so a row is never left half-empty */
function rowSpans(n, maxCols) {
  const rows = Math.max(1, Math.ceil(n / maxCols));
  const out = [];
  let left = n;
  for (let r = 0; r < rows; r++) {
    const inRow = Math.ceil(left / (rows - r));
    for (let k = 0; k < inRow; k++) out.push(12 / inRow);
    left -= inRow;
  }
  return out;
}
/* same idea for 2 columns (tablets): an odd last card takes the full row */
const halfSpan = (j, n) => (n % 2 === 1 && j === n - 1 ? 12 : 6);

const roleShorts = (key) => rolesOf(key).map((i) => `<abbr title="In my ${ROLES[i].title} CV">${ROLES[i].short}</abbr>`).join("<i>·</i>");
const footHTML = (key, p) => `
      <div class="pj-foot">
        <span class="pj-in mono">In CV <b>${roleShorts(key) || "—"}</b></span>
        <a class="pj-gh" href="${p.repo}" target="_blank" rel="noopener" aria-label="${esc(p.title)} on GitHub" title="View code on GitHub">${ICONS.github}</a>
        <span class="pj-go">Open ${ICONS.arrowUpRight}</span>
      </div>`;

function renderProjGrid(filter, first = false) {
  const keys = projectsFor(filter);
  const role = filter === "all" ? null : ROLES[+filter];
  const anim = first ? "reveal" : "pop";
  const spans = rowSpans(keys.length, 4);

  // wide "client work" card on top
  const sk = spotFor(filter), sp = sk && PROJECTS[sk];
  $("#projSpot").innerHTML = sp ? `
    <article class="proj-spot ${anim}" data-project="${sk}" data-ctx="f:${filter}" tabindex="0" role="button" aria-label="Open project: ${esc(sp.title)}">
      <div class="ps-main">
        <div class="pj-top"><span class="ps-badge mono">Client work</span><span class="pj-tag">${esc(tagFor(sk, role).split(" · ")[0])} · 2024 – Present</span></div>
        <h4>${esc(sp.title)}</h4>
        <p class="ps-desc">${esc(sp.points[0])}</p>
        <div class="pj-stack">${stackFor(sk, role).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="ps-side">
        <div class="pj-metric"><b>${esc(sp.metric.value)}</b><span>${esc(sp.metric.label)}</span></div>
        ${sp.flow ? flowHTML(sp.flow, "ps-flow") : ""}
      </div>
      ${footHTML(sk, sp)}
    </article>` : "";

  $("#projGrid").innerHTML = keys.map((k, j) => {
    const p = PROJECTS[k];
    return `
    <article class="proj-card tilt ${anim}" data-tilt="6" data-project="${k}" data-ctx="f:${filter}" tabindex="0" role="button"
      aria-label="Open project: ${esc(p.title)}" style="--d:${(j % 4) * 0.07}s; --span:${spans[j]}; --span-md:${halfSpan(j, keys.length)}">
      <div class="pj-top"><span class="pj-num mono">${pad(j + 1)}</span><span class="pj-tag">${esc(tagFor(k, role))}</span></div>
      <h4>${esc(p.title)}</h4>
      <div class="pj-metric"><b>${esc(p.metric.value)}</b><span>${esc(p.metric.label)}</span></div>
      <div class="pj-stack">${stackFor(k, role).slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      ${footHTML(k, p)}
    </article>`;
  }).join("");
}

function roleCard(r, i) {
  const tags = Object.values(r.skills).flat().slice(0, 9);
  return `
  <div class="rc-slot reveal" data-slot="${i}" style="--d:${i * 0.12}s">
    <div class="rc-tilt tilt" data-tilt="9">
      <div class="role-card" role="tab" tabindex="0" aria-selected="false" aria-controls="roleStage" data-card="${i}" aria-label="${r.title}: show details">
        <!-- FRONT -->
        <div class="rc-face rc-front">
          <span class="rc-num">${pad(i + 1)}</span>
          <div class="rc-icon">${ICONS[ROLE_ICON[r.id]]}</div>
          <h3>${r.title}</h3>
          <p>${esc(r.tagline)}</p>
          <div class="rc-tags">${tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          <div class="rc-foot">
            <span class="btn btn-primary btn-sm rc-explore">${ICONS.flip}<span>Explore role</span></span>
            <a href="${r.cv}" download="${fileName(r.cv)}" class="btn btn-ghost btn-sm" data-stop>${ICONS.download}<span>CV</span></a>
          </div>
          <div class="rc-meta"><span>${r.projects.length} projects</span><span>${Object.values(r.skills).flat().length} skills</span><span>1-page CV</span></div>
        </div>
        <!-- BACK (shown while the role is open) -->
        <div class="rc-face rc-back">
          <div class="rcb-head">
            <span class="rcb-live mono"><i></i>Now exploring</span>
            <div class="rc-icon sm">${ICONS[ROLE_ICON[r.id]]}</div>
          </div>
          <h3>${r.title}</h3>
          <div class="rcb-stats">
            ${r.highlights.map((h) => `<div><b>${esc(h.value)}</b><span>${esc(h.label)}</span></div>`).join("")}
          </div>
          <div class="rcb-fit"><small class="mono">Best fit for</small><div>${r.fit.map((f) => `<span>${esc(f)}</span>`).join("")}</div></div>
          <div class="rc-foot">
            <a href="${r.cv}" download="${fileName(r.cv)}" class="btn btn-primary btn-sm" data-stop>${ICONS.download}<span>Download CV</span></a>
            <button type="button" class="btn btn-ghost btn-sm" data-close-role>${ICONS.close}<span>Close</span></button>
          </div>
          <div class="rcb-down mono">CV, toolkit &amp; ${r.projects.length} projects below ${ICONS.arrowDown}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function rolePanel(r, i) {
  const [first, ...rest] = r.title.split(" ");
  const sceneLabel = { pipeline: "etl.pipeline", schema: "star_schema.model", bars: "dashboard.render" }[r.scene];
  const el = document.createElement("article");
  el.className = "role-panel";
  el.dataset.panel = i;
  el.innerHTML = `
    <header class="role-head">
      <div class="role-intro">
        <div class="eyebrow st" style="--i:0"><span class="idx">${pad(i + 1)}</span><span class="line"></span>Role ${i + 1} of ${ROLES.length}</div>
        <h2 class="role-title st" style="--i:1">${first} <em>${rest.join(" ")}</em></h2>
        <p class="role-headline mono st" style="--i:2">${esc(r.headline)}</p>
        <p class="role-tagline st" style="--i:3">“${esc(r.tagline)}”</p>
        <p class="role-summary st" style="--i:4">${esc(r.summary)}</p>
        <div class="role-highlights st" style="--i:5">
          ${r.highlights.map((h) => `<div class="hl"><b>${esc(h.value)}</b><span>${esc(h.label)}</span></div>`).join("")}
        </div>
      </div>
      <div class="role-visual scene-anchor" aria-hidden="true">
        <div class="visual-label mono">// <b>${sceneLabel}</b>()</div>
      </div>
    </header>

    <div class="role-body">
      <aside class="cv-panel glass st" style="--i:6">
        <div class="cv-panel-head"><h3>Tailored CV</h3><span>${r.short} · 2026</span></div>
        <div class="cv-stage" data-cv="${i}" role="button" tabindex="0" aria-label="Preview ${r.title} CV">
          <div class="cv-paper">
            <img src="${r.cvPreview}" alt="${r.title} CV, first page preview" width="935" height="1210" />
            <span class="shine"></span>
          </div>
        </div>
        <div class="cv-side">
          <div class="cv-actions">
            <a class="btn btn-primary" href="${r.cv}" download="${fileName(r.cv)}">${ICONS.download}<span>Download</span></a>
            <button class="btn btn-ghost" data-cv="${i}">${ICONS.eye}<span>Preview</span></button>
          </div>
          <div class="cv-meta mono"><span>PDF · 1 page</span><span>ATS-friendly</span></div>
          <div class="cv-fit"><small class="mono">Best fit for</small><div>${r.fit.map((f) => `<span>${esc(f)}</span>`).join("")}</div></div>
        </div>
      </aside>

      <div class="skills-panel glass st" style="--i:7">
        <h3>Toolkit for this role</h3>
        ${Object.entries(r.skills).map(([g, items]) => `
          <div class="skill-group">
            <h4>${esc(g)}</h4>
            <div class="chips">${items.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
          </div>`).join("")}
      </div>
    </div>

    <div class="projects-head st" style="--i:8">
      <div><h3>Projects in this CV</h3><p>Exactly what the ${r.title} CV lists. <b class="hint-click">Click a project</b> to open it.</p></div>
      <span>${pad(r.projects.length)} projects</span>
    </div>
    <div class="project-grid">
      ${r.projects.map((key, j) => projectCard(key, r, i, j)).join("")}
    </div>`;
  return el;
}

function projectCard(key, r, ri, j) {
  const p = PROJECTS[key], n = r.projects.length;
  const span = rowSpans(n, 3)[j] / 2; // out of 6 columns
  const points = (r.points && r.points[key]) || p.points;
  return `
  <article class="project-card tilt st" data-tilt="6" style="--i:${9 + j}; --span:${span}; --span-md:${halfSpan(j, n) / 2}"
    data-project="${key}" data-ctx="role:${ri}" tabindex="0" role="button" aria-label="Open project: ${esc(p.title)}">
    <div class="pc-top">
      <span class="pc-tag"><b>${pad(j + 1)}</b>${esc(tagFor(key, r))}</span>
      <a class="pc-gh" href="${p.repo}" target="_blank" rel="noopener" aria-label="${esc(p.title)} on GitHub" title="View code on GitHub">${ICONS.github}</a>
    </div>
    <h4>${esc(p.title)}</h4>
    <div class="pc-metric"><b>${esc(p.metric.value)}</b><span>${esc(p.metric.label)}</span></div>
    <ul>${points.slice(0, 2).map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
    <div class="pc-stack">${stackFor(key, r).map((s) => `<span>${esc(s)}</span>`).join("")}</div>
    <span class="pc-open">Open project ${ICONS.arrowUpRight}</span>
  </article>`;
}
const flowHTML = (flow, cls = "") => `<div class="pc-flow ${cls}" aria-label="Data flow">${flow.map((f, k) => `<span class="node" style="--k:${k}">${esc(f)}</span>`).join('<span class="pipe"><i></i></span>')}</div>`;

/* =========================================================
   Generic interactions
   ========================================================= */
function setupNav() {
  const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("scrolled", y > 20);
    nav.classList.toggle("hide", y > lastY && y > 600 && !links.classList.contains("open"));
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    $("#progress").style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  burger.addEventListener("click", () => {
    const open = !links.classList.contains("open");
    links.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
}

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal, .reveal-side").forEach((el) => io.observe(el));
}

function setupCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0), suf = el.dataset.suffix || "";
      const t0 = performance.now(), dur = reduceMotion ? 1 : 1600;
      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur), v = end * (1 - Math.pow(1 - p, 4));
        el.textContent = v.toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach((el) => io.observe(el));
}

/* tilt + spotlight; can be called again for newly inserted content */
function bindTilt(root = document) {
  if (!canHover || reduceMotion) return;
  $$(".tilt", root).forEach((card) => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "1";
    const max = +(card.dataset.tilt || 8);
    let raf = 0;
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)`;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
      });
    });
    card.addEventListener("pointerleave", () => { cancelAnimationFrame(raf); card.style.transform = ""; });
  });
}

function setupPortrait() {
  if (!canHover || reduceMotion) return;
  const portrait = $("#portrait"), hero = $("#home");
  hero.addEventListener("pointermove", (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    portrait.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 12}deg)`;
  });
  hero.addEventListener("pointerleave", () => (portrait.style.transform = ""));
}

function setupCvModal() {
  const modal = $("#cvModal"), frame = $("#cvFrame");
  const open = (i) => {
    const r = ROLES[i];
    if (innerWidth < 768 || typeof modal.showModal !== "function") { window.open(r.cv, "_blank", "noopener"); return; }
    $("#cvModalTitle").textContent = `Kirolos Magdy · ${r.title} CV`;
    $("#cvModalDownload").href = r.cv;
    $("#cvModalDownload").setAttribute("download", fileName(r.cv));
    $("#cvModalOpen").href = r.cv;
    frame.src = r.cv + "#view=FitH";
    modal.showModal();
  };
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-cv]");
    if (t) open(+t.dataset.cv);
  });
  document.addEventListener("keydown", (e) => {
    const t = e.target.closest?.(".cv-stage");
    if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(+t.dataset.cv); }
  });
  $("#cvModalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => (frame.src = "about:blank"));
}

function setupProjects() {
  const bar = $("#projFilters");
  bar.addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b || b.classList.contains("active")) return;
    $$("[data-filter]", bar).forEach((x) => { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
    renderProjGrid(b.dataset.filter);
    bindTilt($("#projGrid"));
  });
}

/* =========================================================
   Expanded project view: the clicked card grows into a big 3D panel
   ========================================================= */
function setupProjectView(roles) {
  const view = $("#projectView"), card = $("#pvCard"), body = $("#pvBody");
  const st = { list: [], idx: 0, ctx: "", src: null, open: false, busy: false, lastFocus: null };

  const listFor = (ctx) => (ctx.startsWith("role:") ? ROLES[+ctx.slice(5)].projects : listForFilter(ctx.slice(2)));
  const findSrc = (key) => $(`[data-project="${key}"][data-ctx="${st.ctx}"]`);

  function fill(dir) {
    const key = st.list[st.idx], p = PROJECTS[key];
    const role = st.ctx.startsWith("role:") ? ROLES[+st.ctx.slice(5)] : null;
    const filterRole = st.ctx.startsWith("f:") && st.ctx !== "f:all" ? ROLES[+st.ctx.slice(2)] : null;
    const points = (role && role.points && role.points[key]) || p.points;
    const inRoles = rolesOf(key);
    const tag = tagFor(key, role || filterRole);
    const stack = stackFor(key, role || filterRole);
    $("#pvCrumb").innerHTML = role ? `${esc(role.title)} CV <i>/</i> project` : `Projects <i>/</i> ${st.ctx === "f:all" ? "all" : esc(ROLES[+st.ctx.slice(2)].title)}`;
    $("#pvCount").textContent = `${pad(st.idx + 1)} / ${pad(st.list.length)}`;
    body.innerHTML = `
      <div class="pv-content ${dir ? "enter-" + dir : ""}">
        <div class="pv-head">
          <div>
            <span class="pv-tag mono">${esc(tag)}</span>
            <h3 id="pvTitle">${esc(p.title)}</h3>
          </div>
          <div class="pv-metric"><b>${esc(p.metric.value)}</b><span>${esc(p.metric.label)}</span></div>
        </div>
        ${p.flow ? flowHTML(p.flow, "big") : ""}
        <div class="pv-grid">
          <div class="pv-col">
            <h4>What I built</h4>
            <ul class="pv-points">${points.map((pt, k) => `<li style="--k:${k}">${esc(pt)}</li>`).join("")}</ul>
          </div>
          <div class="pv-col">
            <h4>Stack</h4>
            <div class="pv-stack">${stack.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
            <h4>Listed in my CVs</h4>
            <div class="pv-roles">${inRoles.map((i) => `<button type="button" data-goto-role="${i}">${esc(ROLES[i].title)} ${ICONS.arrowRight}</button>`).join("") || `<span class="dim">Freelance work</span>`}</div>
          </div>
        </div>
        <div class="pv-actions">
          <a class="btn btn-primary" href="${p.repo}" target="_blank" rel="noopener">${ICONS.github}<span>View repository</span></a>
          ${role ? `<a class="btn btn-ghost" href="${role.cv}" download="${fileName(role.cv)}">${ICONS.download}<span>Download ${esc(role.title)} CV</span></a>` : ""}
        </div>
      </div>`;
    const single = st.list.length < 2;
    $("#pvPrev").disabled = single; $("#pvNext").disabled = single;
  }

  // FLIP helper: transform that maps the final card box onto rect `r`
  const flipFrom = (r) => {
    const f = card.getBoundingClientRect();
    return `translate(${r.left - f.left}px, ${r.top - f.top}px) scale(${r.width / f.width}, ${r.height / f.height})`;
  };

  function open(key, ctx, src) {
    if (st.busy) return;
    st.ctx = ctx; st.list = listFor(ctx); st.idx = Math.max(0, st.list.indexOf(key)); st.src = src;
    st.lastFocus = document.activeElement;
    fill();
    hydrateIcons(view);
    document.documentElement.classList.add("pv-lock");
    view.hidden = false;
    card.scrollTop = 0;
    const from = src && src.getBoundingClientRect();
    card.style.transition = "none";
    card.style.transform = from && from.width ? flipFrom(from) : "translateY(40px) scale(.92)";
    void card.offsetWidth;
    if (src) src.classList.add("pv-src");
    st.open = true; st.busy = true;
    if (window.__scene) window.__scene.pause(true); // the 3D scene sits frozen behind the blur
    // start the grow animation right away (the forced layout above locks in the start position)
    view.classList.add("show");
    card.style.transition = "";
    card.style.transform = "";
    setTimeout(() => { st.busy = false; card.focus({ preventScroll: true }); }, reduceMotion ? 0 : 560);
  }

  function close() {
    if (!st.open) return;
    st.open = false; st.busy = true;
    if (window.__scene) window.__scene.pause(false);
    const src = st.src && document.contains(st.src) ? st.src : null;
    const r = src && src.getBoundingClientRect();
    const onScreen = r && r.width && r.bottom > 0 && r.top < innerHeight;
    view.classList.remove("show");
    view.classList.add("hiding");
    card.style.transform = onScreen ? flipFrom(r) : "translateY(30px) scale(.94)";
    const done = () => {
      if (st.open) return;
      view.hidden = true; view.classList.remove("hiding");
      card.style.transform = ""; body.innerHTML = "";
      document.documentElement.classList.remove("pv-lock");
      $$(".pv-src").forEach((el) => el.classList.remove("pv-src"));
      st.busy = false;
      if (st.lastFocus && document.contains(st.lastFocus)) st.lastFocus.focus({ preventScroll: true });
    };
    setTimeout(done, reduceMotion ? 0 : 480);
  }

  function step(d) {
    if (!st.open || st.busy || st.list.length < 2) return;
    st.idx = (st.idx + d + st.list.length) % st.list.length;
    if (st.src) st.src.classList.remove("pv-src");
    st.src = findSrc(st.list[st.idx]);
    if (st.src) st.src.classList.add("pv-src");
    fill(d > 0 ? "next" : "prev");
    hydrateIcons(view);
    card.scrollTop = 0;
  }

  // open: click / Enter on any project card (links inside the card keep working)
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-project]");
    if (!c || e.target.closest("a, button")) return;
    open(c.dataset.project, c.dataset.ctx, c);
  });
  document.addEventListener("keydown", (e) => {
    if (st.open) {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      return;
    }
    const c = e.target.closest?.("[data-project]");
    if (c && e.target === c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(c.dataset.project, c.dataset.ctx, c); }
  });
  view.addEventListener("click", (e) => {
    if (e.target.closest("[data-pv-close]")) return close();
    const g = e.target.closest("[data-goto-role]");
    if (g) {
      const i = +g.dataset.gotoRole;
      st.src = null; close();
      setTimeout(() => roles.open(i, { scroll: true }), 120);
    }
  });
  $("#pvPrev").addEventListener("click", () => step(-1));
  $("#pvNext").addEventListener("click", () => step(1));
  // swipe between projects on touch screens
  let sx = 0, sy = 0;
  card.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  card.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6 && !e.target.closest(".pc-flow")) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  return { isOpen: () => st.open, close };
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

function setupContact() {
  $("#copyEmail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(PROFILE.email); $("#copyTag").textContent = "copied ✓"; toast("Email copied to clipboard"); }
    catch { location.href = `mailto:${PROFILE.email}`; }
    setTimeout(() => ($("#copyTag").textContent = "copy"), 2500);
  });

  const form = $("#contactForm"), note = $("#formNote");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const btn = form.querySelector("button[type=submit] span");
    btn.textContent = "Sending…";
    const mailto = () => {
      const body = `Hi Kirolos,%0D%0A%0D%0A${encodeURIComponent(data.get("message"))}%0D%0A%0D%0A· ${encodeURIComponent(data.get("name"))} (${encodeURIComponent(data.get("email"))})`;
      location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio: " + data.get("role"))}&body=${body}`;
    };
    try {
      if (location.protocol === "file:") throw new Error("offline");
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data).toString() });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      note.textContent = "// message received, talk soon!";
      toast("Thanks! Your message was sent.");
    } catch {
      note.textContent = "// opening your email app instead…";
      mailto();
    } finally {
      btn.textContent = "Send message";
    }
  });
}

/* =========================================================
   Role explorer: 3D flip cards (horizontal) + detail stage
   ========================================================= */
const Roles = {
  active: null,
  onChange: () => {},
};

function setupRoles() {
  const deck = $("#roleDeck"), stage = $("#roleStage"), viewport = $("#stageViewport");
  const slots = $$(".rc-slot", deck), cards = $$(".role-card", deck);
  const section = $("#roles");
  const navH = () => ($("#nav").offsetHeight || 72);

  const scrollToStage = () => {
    const top = stage.getBoundingClientRect().top + scrollY - navH() - 12;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const setDeckState = (i) => {
    slots.forEach((s, k) => {
      s.classList.toggle("active", k === i);
      s.classList.toggle("dim", i !== null && k !== i);
    });
    cards.forEach((c, k) => { c.setAttribute("aria-selected", k === i); c.setAttribute("aria-label", `${ROLES[k].title}: ${k === i ? "hide" : "show"} details`); });
    $$(".stage-tab").forEach((t, k) => t.classList.toggle("active", k === i));
    if (i !== null) $("#stageCount").textContent = `${pad(i + 1)} / ${pad(ROLES.length)}`;
    // horizontal deck on mobile: keep the active card in view
    if (i !== null && deck.scrollWidth > deck.clientWidth + 4) {
      const s = slots[i];
      deck.scrollTo({ left: s.offsetLeft - (deck.clientWidth - s.offsetWidth) / 2, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  function open(i, { scroll = true } = {}) {
    if (i === Roles.active) { if (scroll) scrollToStage(); return; }
    const prev = Roles.active;
    Roles.active = i;
    const r = ROLES[i];
    setDeckState(i);
    stage.style.setProperty("--ax", `${((i + 0.5) / ROLES.length) * 100}%`);

    const panel = rolePanel(r, i);
    if (prev === null) {
      viewport.innerHTML = "";
      viewport.append(panel);
      stage.hidden = false;
      stage.classList.remove("closing");
      void stage.offsetWidth; // restart animation
      stage.classList.add("opening");
    } else {
      const dir = i > prev ? "next" : "prev";
      const old = viewport.querySelector(".role-panel:not(.leaving)");
      if (old) {
        old.style.top = "0px";
        old.classList.add("leaving", `leave-${dir}`);
        const kill = () => old.remove();
        old.addEventListener("animationend", (e) => { if (e.target === old) kill(); });
        setTimeout(kill, 900);
      }
      panel.classList.add(`enter-${dir}`);
      viewport.prepend(panel);
      panel.addEventListener("animationend", (e) => { if (e.target === panel) panel.classList.remove(`enter-${dir}`); });
    }
    hydrateIcons(panel);
    bindTilt(panel);

    section.dataset.scene = r.scene;
    section.dataset.role = i;
    if (history.replaceState) history.replaceState(null, "", "#" + r.id);
    Roles.onChange();
    if (scroll) setTimeout(scrollToStage, prev === null ? 120 : 60);
  }

  function close() {
    if (Roles.active === null) return;
    Roles.active = null;
    setDeckState(null);
    stage.classList.remove("opening");
    stage.classList.add("closing");
    const done = () => { if (Roles.active === null) { stage.hidden = true; viewport.innerHTML = ""; stage.classList.remove("closing"); Roles.onChange(); } };
    stage.addEventListener("animationend", (e) => { if (e.target === stage) done(); }, { once: true });
    setTimeout(done, 700);
    section.dataset.scene = "core";
    delete section.dataset.role;
    if (history.replaceState) history.replaceState(null, "", "#roles");
    Roles.onChange();
    const deckTop = deck.getBoundingClientRect().top;
    if (deckTop < 0) window.scrollTo({ top: deckTop + scrollY - navH() - 40, behavior: reduceMotion ? "auto" : "smooth" });
  }

  const step = (d) => { const n = ROLES.length; open(((Roles.active ?? -1) + d + n) % n, { scroll: stage.getBoundingClientRect().top < 0 }); };

  // card clicks (toggle) — but let the CV links work normally
  deck.addEventListener("click", (e) => {
    const slot = e.target.closest(".rc-slot");
    if (!slot) return;
    const i = +slot.dataset.slot;
    const face = slot.querySelector(i === Roles.active ? ".rc-back" : ".rc-front");
    // Browsers can mis-target clicks inside 3D flip cards, so find the control
    // under the pointer by its on-screen box instead of trusting e.target.
    let ctl = e.target.closest("a, button");
    if ((!ctl || !face.contains(ctl)) && e.clientX) {
      ctl = $$("a, button", face).find((el) => {
        const r = el.getBoundingClientRect();
        return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      }) || null;
      if (ctl && ctl.tagName === "A") { e.preventDefault(); ctl.click(); return; } // re-dispatch to the real link
    }
    if (ctl && ctl.hasAttribute("data-stop")) return;    // CV download links work normally
    if (ctl && ctl.hasAttribute("data-close-role")) return close();
    open(i); // clicking the open card again just scrolls to its details
  });
  deck.addEventListener("keydown", (e) => {
    const card = e.target.closest(".role-card");
    if (!card || e.target !== card || !(e.key === "Enter" || e.key === " ")) return;
    e.preventDefault();
    const i = +card.dataset.card;
    i === Roles.active ? close() : open(i);
  });

  $("#stageTabs").addEventListener("click", (e) => { const t = e.target.closest("[data-tab]"); if (t) open(+t.dataset.tab, { scroll: stage.getBoundingClientRect().top < 0 }); });
  $("#stagePrev").addEventListener("click", () => step(-1));
  $("#stageNext").addEventListener("click", () => step(1));
  $("#stageClose").addEventListener("click", close);
  $("#roleDock").addEventListener("click", (e) => { const b = e.target.closest("[data-dock]"); if (b) open(+b.dataset.dock, { scroll: true }); });

  // keyboard arrows while the stage is on screen
  document.addEventListener("keydown", (e) => {
    if (Roles.active === null || /input|textarea|select/i.test(e.target.tagName) || $("#cvModal").open || document.documentElement.classList.contains("pv-lock")) return;
    const r = stage.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "Escape") close();
  });

  // swipe left/right on the stage (touch)
  let sx = 0, sy = 0;
  viewport.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  viewport.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6 && !e.target.closest(".pc-flow")) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  // links to a role (hero pills, shared URLs like /#data-analyst)
  const idxFromHash = (h) => ROLES.findIndex((r) => "#" + r.id === h);
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const i = idxFromHash(a.getAttribute("href"));
    if (i < 0) return;
    e.preventDefault();
    open(i, { scroll: true });
  });

  return { open, close, idxFromHash };
}

/* =========================================================
   Active section → accent colour, nav, role dock, 3D scene
   ========================================================= */
function setupSections(scene) {
  const sections = $$("[data-scene]");
  const navLinks = $$("#navLinks a");
  const dock = $("#roleDock"), dockDl = $("#dockDl");
  const root = document.documentElement;
  let current = null, currentKey = "";

  const update = (force = false) => {
    const mid = innerHeight * 0.45;
    let active = sections[0];
    for (const s of sections) {
      const r = s.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) { active = s; break; }
    }
    const roleIdx = active.dataset.role;
    // the floating dock only appears once the stage's own tab bar has scrolled away
    const bar = $(".stage-bar");
    const barVisible = bar && !$("#roleStage").hidden && bar.getBoundingClientRect().bottom > 0 && bar.getBoundingClientRect().top < innerHeight;
    dock.classList.toggle("show", roleIdx !== undefined && !barVisible);
    const key = active.id + ":" + (roleIdx ?? "");
    if (!force && active === current && key === currentKey) return;
    current = active; currentKey = key;

    const role = roleIdx !== undefined ? ROLES[+roleIdx] : null;
    const colors = PARTICLE_COLORS;

    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + active.id));

    $$("[data-dock]", dock).forEach((b) => b.classList.toggle("active", !!role && +b.dataset.dock === +roleIdx));
    if (role) { dockDl.href = role.cv; dockDl.setAttribute("download", fileName(role.cv)); dockDl.title = `Download ${role.title} CV`; }

    if (scene) {
      const anchor = role ? active.querySelector(".role-panel:not(.leaving) .scene-anchor") : active.querySelector(":scope > .container > .scene-anchor, .hero-visual");
      scene.setState({ shape: active.dataset.scene, anchor, sticky: !!role, colors });
    }
  };
  addEventListener("scroll", () => update(), { passive: true });
  addEventListener("resize", () => update(true));
  update(true);
  return update;
}

/* =========================================================
   Boot
   ========================================================= */
function boot() {
  document.body.classList.add("loading");
  render();
  setupNav();
  setupCounters();
  bindTilt();
  setupPortrait();
  setupCvModal();
  setupProjects();
  setupContact();
  const roles = setupRoles();
  setupProjectView(roles);

  let scene = null;
  try {
    const canvas = $("#scene");
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl2") || probe.getContext("webgl");
    if (gl && window.THREE && window.initScene) scene = window.initScene(canvas);
    else canvas.remove();
  } catch (err) {
    console.warn("3D scene disabled:", err);
  }
  window.__scene = scene;
  const update = setupSections(scene);
  Roles.onChange = () => update(true);

  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    $("#loader").classList.add("done");
    document.body.classList.remove("loading");
    setupReveal();
    // deep link: /#data-engineer opens that role
    const i = roles.idxFromHash(location.hash);
    if (i >= 0) setTimeout(() => roles.open(i, { scroll: true }), 200);
  };
  if (document.readyState === "complete") setTimeout(finish, 350);
  else { addEventListener("load", () => setTimeout(finish, 350)); setTimeout(finish, 2500); }
}

boot();
})();
