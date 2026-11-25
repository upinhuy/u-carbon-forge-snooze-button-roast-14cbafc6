// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes a single one-line roast of an alarm clock ringing at 6 AM on a Saturday
// to /output/entry.txt (no trailing newline), using only Node's standard library.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My alarm clock rings at 6 AM on Saturday like it just got promoted for perfect attendance at a job that doesn't exist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
