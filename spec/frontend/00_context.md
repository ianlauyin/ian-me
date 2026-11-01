# Frontend

The SolidJS page in the browser.

## Page

The page shows Ian as an agentic engineer: Ian writes the specs and the rules, AI agents write most of the code, and Ian reviews each change. The tone is playful.

The page is one screen that scrolls. It has these parts, in this order:

1. Hero: a status badge, the role, the name, a tagline, a short introduction, the external links and the agent session card.
2. My agentic loop: a numbered list of the work steps.
3. Shipped with my agents: one card for each project.
4. My toolbox: two groups of tools. The first group is the agent tools. The second group is the technology stack.
5. Footer: the copyright line and a short note.

All the text is in `frontend/src/module/profile/content.ts`. The page follows the light or dark color scheme of the system.

## Tab icon

The tab icon is `frontend/public/favicon.svg`. It shows a terminal prompt: a light chevron and a yellow cursor on a green tile. The icon tells that Ian works with agents in the terminal. The icon uses only shapes and no text, so it does not need a font and it is clear at 16 px.

## Agent session card

The agent session card shows a demo conversation between Ian and an agent, in the style of a terminal.

- The card shows the lines one at a time. After the last line, the card waits and then starts again.
- When the system asks for reduced motion, the card shows all the lines at one time and does not animate. The other animations on the page also stop.

## Build

The page is a static site. `pnpm build` in `frontend/` writes the page to `frontend/dist`. The page does not call an API. A static web server serves `frontend/dist`.
