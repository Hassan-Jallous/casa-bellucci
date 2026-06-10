// Einmaliges Tooling: laedt die exakt von Google Fonts referenzierten woff2 (nur
// latin-Subset, deckt DE/EN/IT inkl. Umlauten/Akzenten ab) nach public/fonts und
// generiert public/styles/fonts.css mit lokalen @font-face-Regeln. Kein Teil des
// Builds. Aufruf: node scripts/fetch-fonts.mjs
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap';
// Moderner Browser-UA -> Google liefert woff2 + subset-Kommentare (/* latin */).
const UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';

const root = process.cwd();
const fontsDir = join(root, 'public', 'fonts');
await mkdir(fontsDir, { recursive: true });

const css = await fetch(CSS_URL, { headers: { 'User-Agent': UA } }).then((r) => r.text());

// CSS ist als Folge von "/* subset */\n@font-face{...}" aufgebaut. Wir nehmen nur
// die Bloecke, deren vorangehender Kommentar "latin" (exakt, nicht latin-ext) ist.
const blocks = css.split('/*').slice(1); // jedes Element: " subset */ @font-face{...}"
const slug = (s) => s.toLowerCase().replace(/['"]/g, '').replace(/\s+/g, '-');
const out = [];
const seen = new Set();

for (const b of blocks) {
  const subsetMatch = b.match(/^\s*([a-z0-9-]+)\s*\*\//);
  if (!subsetMatch) continue;
  const subset = subsetMatch[1];
  if (subset !== 'latin') continue; // nur latin, kein latin-ext/cyrillic/vietnamese

  const family = (b.match(/font-family:\s*'([^']+)'/) || [])[1];
  const weight = (b.match(/font-weight:\s*(\d+)/) || [])[1];
  const style = (b.match(/font-style:\s*([a-z]+)/) || [])[1] || 'normal';
  const url = (b.match(/src:\s*url\(([^)]+)\)/) || [])[1];
  if (!family || !weight || !url) continue;

  const name = `${slug(family)}-${weight}-${style}.woff2`;
  if (seen.has(name)) continue;
  seen.add(name);

  const buf = Buffer.from(await fetch(url, { headers: { 'User-Agent': UA } }).then((r) => r.arrayBuffer()));
  await writeFile(join(fontsDir, name), buf);
  console.log(`  ${name.padEnd(38)} ${(buf.length / 1024).toFixed(1)} KB`);

  out.push(
    `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url(/fonts/${name}) format('woff2');}`
  );
}

const header =
  '/* Selbst gehostete Schriften (latin-Subset). Generiert von scripts/fetch-fonts.mjs.\n' +
  '   In den <head> inline eingebunden (app/layout.tsx), daher absolute /fonts/-Pfade,\n' +
  '   die layout.tsx basePath-aware umschreibt. Family-Namen identisch zu Google Fonts. */\n';
await writeFile(join(root, 'public', 'styles', 'fonts.css'), header + out.join('\n') + '\n');
console.log(`\nGeschrieben: public/styles/fonts.css (${out.length} Schnitte)`);
