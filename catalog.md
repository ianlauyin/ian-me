# catalog

- The decision records a behaviour that the code does not show.
- Update that row in the same change when you make a new decision, the entry moves, or you add or remove a feature.
- When a code change would change the decision and you did not make that decision, stop and ask. Leave the decision as it is.

| path                     | description                              | decision                                                                                                  |
| ------------------------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `src/Profile/index.tsx`  | The web page.                            | The tone is playful. The page is one screen that scrolls.                                                 |
| `src/Profile/content.ts` | The text of the page.                    | All the text of the page is in this file.                                                                 |
| `src/Profile/AgentLog/`  | The demo agent session in the hero card. | The lines of `AGENT_LOG` play one at a time.                                                              |
| `public/favicon.svg`     | The tab icon.                            | The icon uses only shapes, so it stays clear at 16 px.                                                    |
| `package.json`           | The static site.                         | `pnpm build` writes the page to `dist`. The page does not call an API. A static web server serves `dist`. |
