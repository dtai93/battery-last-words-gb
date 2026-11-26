// Phone at 1%: one last line, punch last.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Low Power Mode kept the flashlight. Your draft still says I'm outside.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 199 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-199 characters and not blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, { encoding: "utf8" });
