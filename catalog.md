# catalog

Each row has the entry path, a short description, and the open behaviour. Update that row in the same change when you make a new decision, the entry moves, or you add or remove a feature. When a code change would change the open behaviour and you did not make that decision, stop and ask. Leave the decision as it is.

| path | description | decision |
| --- | --- | --- |
| `frontend/src/Profile/index.tsx` | The web page. | The page shows Ian as an agentic engineer. The tone is playful. The page is one screen that scrolls. The parts, in this order, are the hero, My agentic loop, Shipped with my agents, My toolbox and the footer. The hero has a status badge, the role, the name, a tagline, a short introduction, the external links and the agent session card. My toolbox has two groups. The first group is the agent tools. The second group is the technology stack. The footer has the copyright line and a short note. When the system asks for reduced motion, the animations on the page stop. |
| `frontend/src/Profile/content.ts` | The text of the page. | All the text of the page is in this file. |
| `frontend/src/index.css` | Light and dark colors. | The page follows the light or dark color scheme of the system. |
| `frontend/public/favicon.svg` | The tab icon. | The icon shows a terminal prompt: a light chevron and a yellow cursor on a green tile. The icon uses only shapes and no text, so it stays clear at 16 px. |
| `frontend/src/Profile/AgentLog/` | The agent session card. | The card shows a demo conversation between Ian and an agent, in the style of a terminal. The card shows the lines one at a time. After the last line, the card waits and then starts again. When the system asks for reduced motion, the card shows all the lines at one time and does not animate. |
| `frontend/` | The static site. | `pnpm build` in `frontend/` writes the page to `frontend/dist`. The page does not call an API. A static web server serves `frontend/dist`. |
