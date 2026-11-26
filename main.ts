/**
 * Writes the nostalgia memory string to entry.txt in the specified output directory.
 */
import fs from 'fs';
import path from 'path';

// This cherished recollection harks back to grandmother's kitchen, alive with gentle steam and quiet humming, where a hidden treat was warmly passed from the cook to her grandchild.
const memory = "Grandma's kitchen at dusk, the rice cooker sighing steam while she hummed off-key and slipped me the burnt crust from the pot, the part she always said was the cook's prize.";

// Because the prize rules restrict output to a single brief sentence, this safeguard halts generation if text exceeds the allowed boundary.
if (memory.length > 280) {
  throw new Error('Memory length exceeds 280 characters.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), memory, 'utf8');
