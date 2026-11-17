import { For } from "solid-js";
import AgentLog from "./AgentLog";
import { FOOTNOTE, INTRO, LINKS, LOOP, NAME, PROJECTS, ROLE, STATUS, TAGLINE, TOOLS } from "./content";
import "./index.css";

export default function Profile() {
  return (
    <main id="profile" class="profile">
      <header class="hero">
        <div class="hello">
          <p class="role">
            <span class="status">
              <span class="dot" aria-hidden="true" />
              {STATUS}
            </span>
            {ROLE}
          </p>
          <h1>
            Hi, I'm {NAME}{" "}
            <span class="wave" aria-hidden="true">
              👋
            </span>
          </h1>
          <p class="tagline">
            {TAGLINE.before}
            <mark>{TAGLINE.highlight}</mark>
            {TAGLINE.after}
          </p>
          <p class="intro">{INTRO}</p>
          <nav class="links" aria-label="Links">
            <For each={LINKS}>
              {(link) => (
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              )}
            </For>
          </nav>
        </div>
        <AgentLog />
      </header>

      <section class="block" aria-labelledby="profile-loop">
        <h2 id="profile-loop">
          <span aria-hidden="true">🔁 </span>My agentic loop
        </h2>
        <ol class="loop">
          <For each={LOOP}>
            {(step) => (
              <li>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            )}
          </For>
        </ol>
      </section>

      <section class="block" aria-labelledby="profile-projects">
        <h2 id="profile-projects">
          <span aria-hidden="true">🚀 </span>Shipped with my agents
        </h2>
        <ul class="projects">
          <For each={PROJECTS}>
            {(project) => (
              <li>
                <span class="icon" aria-hidden="true">
                  {project.icon}
                </span>
                <h3>{project.name}</h3>
                <p class="stack">{project.stack}</p>
                <p class="summary">{project.summary}</p>
              </li>
            )}
          </For>
        </ul>
      </section>

      <section class="block" aria-labelledby="profile-tools">
        <h2 id="profile-tools">
          <span aria-hidden="true">🧰 </span>My toolbox
        </h2>
        <div class="tools">
          <For each={TOOLS}>
            {(group) => (
              <div>
                <h3>{group.name}</h3>
                <ul>
                  <For each={group.tools}>{(tool) => <li>{tool}</li>}</For>
                </ul>
              </div>
            )}
          </For>
        </div>
      </section>

      <footer class="foot">
        <p>
          © {new Date().getFullYear()} {NAME} · {FOOTNOTE}
        </p>
      </footer>
    </main>
  );
}
