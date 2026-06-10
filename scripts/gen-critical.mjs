// Generiert public/styles/critical.css = das Above-the-fold-CSS der Startseite
// (Mobile-Viewport), das in app/layout.tsx inline in den <head> kommt, damit der
// erste Paint nicht auf die render-blockierenden Stylesheets warten muss. Der Rest
// von styles.css/vivid.css wird dann asynchron nachgeladen.
//
// Reproduzierbar: nutzt das installierte System-Chrome via puppeteer-core (kein
// Chromium-Download). Bei groesseren Above-the-fold-Aenderungen neu ausfuehren:
//   node scripts/gen-critical.mjs http://localhost:4321/
import puppeteer from 'puppeteer-core';
import { writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const URL = process.argv[2] || 'http://localhost:4321/';
const CHROME =
  process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const extract = () => {
  const VH = window.innerHeight, VW = window.innerWidth;
  const keepPrefix = /^(\*|html|body|:root|\[data-)/i;
  // WICHTIG: KEIN Sichtbarkeits-Filter. Versteckte, aber positionierte Overlays
  // (mobile-nav, lightbox, menu-viewer: position:fixed/absolute + visibility:hidden)
  // muessen mit ihrer Positionierung ins Critical, sonst fallen sie auf
  // position:static zurueck, rendern IM FLUSS und schieben den Hero nach unten
  // (grosser CLS, sobald das volle CSS nachlaedt und sie wieder aus dem Fluss nimmt).
  const aboveFold = (sel) => {
    const base = sel.replace(/::?(before|after|hover|focus|active|visited|focus-visible|focus-within|placeholder|first-line|first-letter|selection|marker)\b[^ ,>+~]*/gi, '').trim() || sel;
    let els; try { els = document.querySelectorAll(base); } catch { return true; }
    for (const el of els) {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      // Fixe/absolute Elemente immer mitnehmen (Out-of-flow-Positionierung zaehlt,
      // auch wenn aktuell ausserhalb des Viewports oder hidden).
      if (cs.position === 'fixed' || cs.position === 'absolute') return true;
      if (r.width === 0 && r.height === 0) continue;
      if (r.top < VH && r.bottom > 0 && r.left < VW) return true;
    }
    return false;
  };
  const proc = (rules) => {
    let out = '';
    for (const rule of rules) {
      if (rule.type === 1) {
        const sel = rule.selectorText || ''; if (!sel) continue;
        if (keepPrefix.test(sel.trim())) { out += rule.cssText + '\n'; continue; }
        if (sel.split(',').map((s) => s.trim()).some(aboveFold)) out += rule.cssText + '\n';
      } else if (rule.type === 4) {
        const cond = rule.conditionText || rule.media.mediaText;
        if (window.matchMedia(cond).matches) {
          const inner = proc(rule.cssRules);
          if (inner.trim()) out += `@media ${cond}{${inner}}\n`;
        }
      } else if (rule.type === 5 || rule.type === 7 || rule.type === 12 || rule.type === 8 || rule.type === 13) {
        out += rule.cssText + '\n';
      }
    }
    return out;
  };
  let css = '';
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    if (!rules) continue;
    const href = sheet.href || '';
    // NUR die externen Prototype-Stylesheets (nicht das inline Critical/Font <style>).
    if (!/\/styles\/(styles|vivid)\.css/.test(href)) continue;
    css += proc(rules);
  }
  return css;
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => document.fonts && document.fonts.ready);
let critical = await page.evaluate(extract);
await browser.close();

// Relative url("../x") -> absolute url("/x"), Anfuehrungszeichen balanciert lassen.
critical = critical.replace(/url\((["']?)\.\.\//g, 'url($1/');

// Die selbst gehosteten Google-@font-face (nur in fonts.css, NICHT in styles/vivid)
// voranstellen, damit die Schriften im Critical verfuegbar sind.
try {
  const fontCss = readFileSync(join(process.cwd(), 'public', 'styles', 'fonts.css'), 'utf8');
  critical = fontCss.trim() + '\n' + critical;
} catch {}
// Etwas straffen (fuehrende Whitespaces je Zeile), ohne CSS-Semantik zu aendern.
critical = critical.split('\n').map((l) => l.trimEnd()).filter(Boolean).join('\n') + '\n';

const outPath = join(process.cwd(), 'public', 'styles', 'critical.css');
writeFileSync(outPath, critical);
console.log(`critical.css geschrieben: ${(critical.length / 1024).toFixed(1)} KB -> ${outPath}`);
