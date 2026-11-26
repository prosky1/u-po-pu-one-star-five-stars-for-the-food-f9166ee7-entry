import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "One star: they screamed at our probe for an hour, then fed it tacos so good we cancelled the invasion.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function assertValidReview(text: string): void {
  const charCount = [...text].length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(
      `Review must be 1-${MAX_CHARS} characters, got ${charCount}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Review must not be only whitespace");
  }
}

assertValidReview(REVIEW);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
