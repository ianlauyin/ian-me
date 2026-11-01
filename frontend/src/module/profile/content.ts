// All the text of the page. Edit this file to change what the page says.

export const NAME = "Ian Lau";
export const ROLE = "Agentic engineer · Hong Kong";
export const STATUS = "agents online";

export const TAGLINE = {
  before: "I don't type all the code. I ",
  highlight: "direct the agents",
  after: " that do.",
};

export const INTRO =
  "I'm an agentic engineer. I design the system, write the specs and set the rules — then a crew of AI agents writes most of the code while I steer, review every diff and ship. Rust in the back, SolidJS in the front, and a lot of very productive conversations in between.";

export type LogLine = {
  who: "ian" | "agent" | "done";
  text: string;
};

// The demo session that plays in the hero card, one line at a time.
export const AGENT_LOG: LogLine[] = [
  { who: "ian", text: "Build a log server for all my apps." },
  { who: "agent", text: "Reading spec/structure.md and rules/…" },
  { who: "agent", text: "Plan: 4 steps. Starting with the ingest API." },
  { who: "agent", text: "Tests: all green ✓" },
  { who: "ian", text: "Nice. Rename one field, then ship it." },
  { who: "done", text: "Shipped. Spec updated. Coffee still warm ☕" },
];

export type Step = {
  title: string;
  text: string;
};

export const LOOP: Step[] = [
  {
    title: "Spec it",
    text: "Every feature starts as a short spec. A good spec is the best prompt there is — and it never goes stale, because the code and the spec change together.",
  },
  {
    title: "Set the guardrails",
    text: "AGENTS.md and a folder of rules teach the agents my style, my git habits and my no-go zones before they touch a single file.",
  },
  {
    title: "Let the crew run",
    text: "Agents read, plan, code, test and fix in parallel. I stay at the level of the system and keep the work moving.",
  },
  {
    title: "Review every diff",
    text: "Nothing ships unread. I am the human in the loop: plain code, few abstractions, and every change makes sense to a person.",
  },
];

export type Project = {
  icon: string;
  name: string;
  stack: string;
  summary: string;
};

export const PROJECTS: Project[] = [
  {
    icon: "🧱",
    name: "ian-framework",
    stack: "Rust · SolidJS",
    summary:
      "My shared foundation. Logging, cookie sessions, Cloud Storage, CPU and disk monitors and frontend helpers — so my agents reuse instead of reinvent.",
  },
  {
    icon: "🛰️",
    name: "ian-agentic-workspace",
    stack: "Axum · SQLite · Cursor agents",
    summary:
      "My command center for all my repos. I make the calls on open spec decisions, turn notes into tasks and read the logs of every app — one click sends a Cursor agent into the right repo to do the work.",
  },
  {
    icon: "📜",
    name: "log-server",
    stack: "Axum · SQLite · Parquet",
    summary:
      "One home for the logs of all my apps. Each backend ships batches of events, and closed quarters retire to Parquet archives in Cloud Storage.",
  },
];

export type ToolGroup = {
  name: string;
  tools: string[];
};

export const TOOLS: ToolGroup[] = [
  { name: "The crew", tools: ["Claude Code", "Cursor","Specs & rules"] },
  { name: "The stack", tools: ["Rust", "Axum", "TypeScript", "SolidJS", "React", "Redux", "SQLite", "Redis", "Google Cloud", "Cloud Build"] },
];

export type Link = {
  label: string;
  href: string;
};

export const LINKS: Link[] = [{ label: "GitHub", href: "https://github.com/ianlauyin" }];

export const FOOTNOTE = "Built by one human and a few very patient agents 🤖";
