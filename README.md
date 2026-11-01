# Cyber Security Lab Viva — Study & Test App

An offline, single-folder web app (plain HTML + CSS + vanilla JavaScript) that turns
`cybersecurity_lab_viva_study_guide.md` into an interactive study and self-testing tool.

**No build step, no frameworks, no network access required.** Open `index.html`
directly in any browser (double-click works — `file://` is fully supported everything
is local). Your progress is saved in the browser's `localStorage` and never leaves your machine.

## Contents

| File | Purpose |
| --- | --- |
| `index.html` | App shell (top bar, sidebar, content area, quiz dialog) |
| `styles.css` | Pastel light/dark themes, accordions, responsive + print styles |
| `app.js` | All app logic (rendering, search, quiz, progress, storage) |
| `data.js` | The parsed study-guide content (`LAB_DATA`) |
| `cybersecurity_lab_viva_study_guide.md` | Source document (unchanged) |

## Parsed data

- **6 modules → 15 topics → 12 experiments → 47 experiment questions**
- **10 general viva questions** (57 questions total; 90 unique ids, verified)
- Answers are stored as self-contained HTML: markdown bold → `<strong>`,
  italics → `<em>`, inline code → `<code>`, fenced code → `<pre>` (with copy
  button), markdown tables → real `<table>` (zebra rows, sticky header) inside a
  scrollable wrapper, numbered steps preserved as `<ol>`.
- LaTeX snippets were converted to readable Unicode math (e.g. `$26 \times 26$`
  → “26 × 26”, `\phi(n) = (p-1)(q-1)` → “φ(n) = (p − 1)(q − 1)”, `\xrightarrow{SYN}`
  flows → “Scanner —SYN→ Target —SYN/ACK→ Scanner —RST→ Target”), keeping wording intact.
- **Experiment aims:** each experiment carries its official aim in `aim` (the 12
  aims were supplied separately from the study guide) and it is rendered as an
  “Aim” banner at the top of the experiment. The former “Objective” chip on the
  first question was removed once the explicit aims were added.
- The temporary “*Not found in lab docs – add manually*” placeholders that appeared
  in the source were **removed** from all answers on request (40 markers).

## Learn & Test modes

- **Learn** — everything readable; per-module progress counts questions you have opened.
- **Test** — answers are hidden; each question shows **Reveal answer**, then
  **I knew it** / **Need revision**. Scores feed the module progress bars and the
  overall “known · need revision · left” score in the test panel.
- **Need revision only** filter hides everything except marked questions.
- **Shuffle questions** reorders every experiment's questions (with restore).
- **Quick quiz** — random questions drawn from the modules you enabled in the
  sidebar; navigate with Previous/Next, reshuffle, reveal, and mark yourself.
- **Reset progress** wipes marks, bookmarks, and settings.

## Navigation & study aids

- Sticky collapsible sidebar with scroll-spy highlighting (drawer on mobile).
- Per-module **Expand all / Collapse all**; every question/topic is an accordion.
- Instant **search** over questions, topics, and answers — results list with
  highlighted snippets; opening a result jumps there, opens the parents, flashes
  the item, and highlights the query inside it.
- **Bookmarks:** star any topic or question; the star-button view lists them,
  bookmarks persist between visits.
- **Copy button** on every code block; **reading-progress** bar; **back-to-top**.
- Keyboard accessible throughout (buttons, `aria-expanded`/`aria-pressed`,
  Escape closes quiz/search marks).

## Visual design

- Pastel palette with a different accent per module (mint/lavender/peach/sky/rose/
  butter), AA-contrast text on both themes.
- **Dark mode** follows your system preference, with a manual toggle in the top bar.
- **Key-term highlighting** — terminology auto-highlight (yellow) with a toggle,
  wavy underline for critical terms (e.g. CIA Triad, OWASP Top 10, CVSS).
- Monospace code blocks with language chips; zebra tables with sticky headers.
- System fonts only; all icons are inline SVG (no icon fonts, no emoji, nothing
  served from a CDN).

## Responsive + print

- Verified without horizontal overflow at 375 px, 620 px, 768 px, and 1280 px.
- **Print stylesheet** expands every accordion panel — use the browser's Print /
  Save-as-PDF for a complete paper study pack (≈48 pages, screenshots excluded).

## Offline integrity checklist

- No external scripts, fonts, stylesheets, or images (favicon is an inline `data:` SVG).
- The few `http(s)://` strings inside `data.js` (e.g. `testphp.vulnweb.com`,
  `sourceforge.net`, `attacker.com` examples) are **answer content quoted from the
  lab guide**, never fetched by the app.
- No emoji characters in any file; icons are inline SVG only.

## Troubleshooting

- If progress stops persisting, a “Storage unavailable” note appears in the sidebar
  (private browsing can block `localStorage`); the app still works while open.
- Delete the `cyberlab-viva-v1` `localStorage` key (or click **Reset**) to start fresh.
