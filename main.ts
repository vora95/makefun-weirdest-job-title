// u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922 — "Weirdest Job Title: Blind Judge Showdown"
//
// The program writes one short text to /output/entry.txt: a single original
// job title, 60 characters at most and nothing else. The title is a real
// job with one gloriously specific twist: a professional mourner — someone
// hired to weep at funerals — whose clients are retired office plants.
// The job sounds real enough to picture (a black suit, a wilted fern, a
// eulogy for a ficus), and the twist lands on the first read: the dead
// being mourned never had a pulse, only a pot — and the mourner bills
// by the leaf. Specific, instant, funny without a word salad — exactly
// what the deadpan judge's brief rewards.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "Professional Mourner for Retired Office Plants";

// The gate allows 1–60 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 60) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–60`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
