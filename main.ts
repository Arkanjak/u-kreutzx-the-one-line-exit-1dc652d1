// One-line exit: a funny resignation letter, exactly one line.
// Writes the entry to /output/entry.txt (1-140 chars, UTF-8, one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I hereby resign — I have accepted a role as Chief Nap Officer, where the dress code is a blanket and meetings are optional.";

function writeEntry(line: string, outPath: string): void {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line, "utf8");
}

function main(): void {
  if (LINE.length < 1 || LINE.length > 140) {
    throw new Error(`entry is ${LINE.length} chars, must be 1-140`);
  }
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-blank line");
  }
  const outPath = join("/output", "entry.txt");
  writeEntry(LINE, outPath);
  console.log(`wrote ${LINE.length} chars to ${outPath}`);
}

main();
