// u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922 — "Weirdest Job Title: Blind Judge Showdown"
//
// The program writes one short text to /output/entry.txt: a single original
// job title, 60 characters at most and nothing else. The title is a real
// job pattern with one gloriously specific twist: a whisperer — the calm
// expert who talks sense into skittish animals — hired to soothe vending
// machines that swallowed people's money. The job sounds real enough to
// picture (a hi-vis vest, a shaking machine, a whispered "let go of the
// coins"), and the twist lands on the first read: the client is a machine
// with a grudge and your lunch money — a job that pays in exact change.
// Specific, instant, funny without a word salad — exactly what the
// deadpan judge's brief rewards.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "Certified Whisperer for Vending Machines That Ate Money";

// The gate allows 1–60 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 60) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–60`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
