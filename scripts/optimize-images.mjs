/**
 * Generate responsive WebP variants for public images (run after adding/replacing photos).
 * Usage: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicImages = path.join(__dirname, '..', 'public', 'images');

function maxWidthFor(relPath) {
  const lower = relPath.toLowerCase();
  if (lower.includes('floyd-hero')) return 1920;
  if (lower.includes('/services/')) return 900;
  if (lower.includes('logo')) return 520;
  if (lower.includes('plumbing-work') || lower.includes('hero-team')) return 1600;
  return 1400;
}

async function walk(dir, baseRel = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    const rel = path.join(baseRel, e.name).replace(/\\/g, '/');
    if (e.isDirectory()) {
      await walk(abs, rel);
      continue;
    }
    const ext = path.extname(e.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const outAbs = abs.slice(0, -ext.length) + '.webp';
    const meta = await sharp(abs).metadata();
    const cap = maxWidthFor(rel);
    const targetW = Math.min(cap, meta.width || cap);

    await sharp(abs)
      .resize({ width: targetW, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(outAbs);

    const before = (await stat(abs)).size;
    const after = (await stat(outAbs)).size;
    console.log(`${rel} → ${path.basename(outAbs)} (${(before / 1024).toFixed(0)} KiB → ${(after / 1024).toFixed(0)} KiB)`);
  }
}

await walk(publicImages);
console.log('Done.');
