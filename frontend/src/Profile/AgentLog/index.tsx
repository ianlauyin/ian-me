import { For, createSignal, onCleanup } from "solid-js";
import { AGENT_LOG } from "../content";
import "./index.css";

const LINE_DELAY_MS = 1100;
const RESTART_DELAY_MS = 4000;

export default function AgentLog() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = createSignal(reducedMotion ? AGENT_LOG.length : 1);

  let timer: ReturnType<typeof setTimeout> | undefined;

  const tick = () => {
    const next = setShown((count) => (count >= AGENT_LOG.length ? 1 : count + 1));
    timer = setTimeout(tick, next >= AGENT_LOG.length ? RESTART_DELAY_MS : LINE_DELAY_MS);
  };

  if (!reducedMotion) {
    timer = setTimeout(tick, LINE_DELAY_MS);
  }
  onCleanup(() => clearTimeout(timer));

  return (
    <figure class="profile-agent-log" aria-label="A demo agent session">
      <div class="bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>~/ian/log-server — agent session</p>
      </div>
      <ol class="lines">
        <For each={AGENT_LOG.slice(0, shown())}>
          {(line) => (
            <li class={line.who}>
              <span class="who">{line.who === "ian" ? "ian ›" : line.who === "agent" ? "agent ›" : "✓"}</span>
              <span>{line.text}</span>
            </li>
          )}
        </For>
        <li class="cursor" aria-hidden="true">
          <span class="who">ian ›</span>
          <span class="caret" />
        </li>
      </ol>
    </figure>
  );
}
