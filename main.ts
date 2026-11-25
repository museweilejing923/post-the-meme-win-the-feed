// Entry for the make.fun "Post the Meme, Win the Feed" bounty (Node 22,
// standard library only). The entry itself is the X post: this program only
// copies POST.json from the repository root to /output/POST.json, where the
// gate reads the post's address.
//
// POST.json is filled in only after the meme is posted from a public X
// account: {"url": "https://x.com/<handle>/status/<id>"}.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Refuse a placeholder or malformed post address instead of handing in
// something the gate would reject: the url must be a real x.com (or
// twitter.com) status link with numeric id.
const postPath = join(BOT_DIR, 'POST.json');
try {
  const { url } = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
  if (typeof url !== 'string' || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(url)) {
    console.error(`POST.json does not hold a real post address: ${String(url)}`);
    process.exit(1);
  }
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
