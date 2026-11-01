# ian-me

The personal website of Ian Lau. The page introduces Ian as an agentic engineer, the projects and the way of work.

The live site is at https://me.ianlau.app.

## Layout

- `frontend/`: SolidJS and TypeScript. Vite builds the page into static files.
- `spec/`: the behaviour.

## Change the text

All the text of the page is in `frontend/src/module/profile/content.ts`.

## Run locally

```bash
cd frontend
pnpm install
pnpm dev
```

Open `http://127.0.0.1:5173`.

## Build and deploy

```bash
cd frontend
pnpm install
pnpm build
```

The build writes the page to `frontend/dist`. Copy the contents of `frontend/dist` to the web root of a static web server. The page uses absolute asset paths, so serve it at the root path of the site.

## Tests

```bash
cd frontend && pnpm check && pnpm lint && pnpm build
```
