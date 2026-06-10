import type { LegalEntry, LegalSlug } from './index';

const contactBlock = `
<p>
  Bellucci Gastronomie GmbH<br>
  Kurfürstendamm 63<br>
  10625 Berlin<br>
  Germany<br>
  Phone: <a href="tel:4901623009925">+49 (0) 162 3009925</a><br>
  Email: <a href="mailto:info@casabellucci.de">info@casabellucci.de</a>
</p>
`;

const impressum = `
<h2>Legal notice</h2>
${contactBlock}
<p><strong>Address note:</strong> The legal provider address is Kurfürstendamm 63, 10625 Berlin. The publicly communicated visitor address of the restaurant and the Local SEO/schema address are Kurfürstendamm 63, 10707 Berlin-Charlottenburg.</p>
<h2>Commercial register</h2>
<p>Commercial register: HRB 227777 B<br>Register court: Amtsgericht Charlottenburg</p>
<h2>Represented by</h2>
<p>Mr A. Hess</p>
<h2>VAT</h2>
<p>VAT identification number under Section 27a German VAT Act: DE273611502</p>
<h2>Supervisory authority</h2>
<p>Ordnungsamt Charlottenburg-Wilmersdorf<br>Hohenzollerndamm 174-177<br>10713 Berlin</p>
<h2>Responsible for content under Section 18(2) MStV</h2>
${contactBlock}
<h2>Dispute resolution</h2>
<p>The European Commission provides an online dispute resolution platform: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
<h2>Copyright</h2>
<p>The content and works created by the site operator are subject to German copyright law. Downloads and copies are permitted for private, non-commercial use only.</p>
`;

const datenschutz = `
<h2>1. Controller</h2>
${contactBlock}
<p>The controller is the person or legal entity that decides alone or jointly on the purposes and means of processing personal data.</p>
<h2>2. Website delivery and server logs</h2>
<p>When this website is accessed, the hosting provider processes technically necessary access data, especially IP address, date and time, requested URL, referrer, browser and operating system information. This is required to deliver the website securely and reliably. Legal basis: Art. 6(1)(f) GDPR.</p>
<h2>3. Contact</h2>
<p>If you contact us by phone or email, we process the data you provide to handle your request. Legal basis may be Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR depending on the request.</p>
<h2>4. Reservations via Quandoo</h2>
<p>For online reservations, we embed the Quandoo booking widget. Provider: Quandoo GmbH, Sonnenburger Str. 73, 10437 Berlin. When you use the reservation function, personal data and technical usage data may be transmitted to and processed by Quandoo. More information: <a href="https://www.quandoo.de/data_privacy/" target="_blank" rel="noopener">https://www.quandoo.de/data_privacy/</a>.</p>
<h2>5. Google Fonts</h2>
<p>This website loads fonts via Google Fonts. When font files are requested, your IP address may be transmitted to Google servers. Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Legal basis: our legitimate interest in consistent and performant presentation under Art. 6(1)(f) GDPR.</p>
<h2>6. Local browser storage</h2>
<p>The website stores an explicitly selected language locally in the browser under <code>cb-lang</code>. This is used only for usability, not for analytics or advertising. The internal admin area uses <code>sessionStorage</code> to hold an admin token during the session.</p>
<h2>7. No analytics or advertising tags in the current build</h2>
<p>The current Next.js build does not include Google Analytics, Google Ads, Google Tag Manager or Meta Pixel scripts. If tracking is added later, this privacy notice and the cookie policy must be updated before use.</p>
<h2>8. Your rights</h2>
<p>Under the GDPR you have rights including access, rectification, erasure, restriction of processing, data portability and objection. You may also lodge a complaint with a competent data protection authority.</p>
`;

const cookies = `
<h2>1. Introduction</h2>
<p>This cookie policy describes the cookies, local storage mechanisms and external services actually used in the current Next.js build.</p>
<h2>2. Technically necessary local storage</h2>
<p>The website stores the language you actively choose locally in the browser under <code>cb-lang</code>. This is functional storage and keeps your language choice on the same URL.</p>
<h2>3. Admin session</h2>
<p>The internal admin area stores an admin token in <code>sessionStorage</code> after a successful login. This is relevant only for authorized administrators and is discarded when the session ends.</p>
<h2>4. Quandoo reservation widget</h2>
<p>The reservation page loads the Quandoo booking widget. Quandoo may use cookies, local storage or similar technologies to provide the reservation function. More information: <a href="https://www.quandoo.de/data_privacy/" target="_blank" rel="noopener">https://www.quandoo.de/data_privacy/</a>.</p>
<h2>5. Google Fonts</h2>
<p>The website loads fonts from Google Fonts. Technical access data may be transmitted to Google. Google Fonts is used for consistent website presentation.</p>
<h2>6. No cookie banner in the current build</h2>
<p>The current build does not show a cookie or consent popup and does not set first-party analytics, ads or marketing cookies. If consent-requiring services are added later, an appropriate consent mechanism must be implemented and this policy updated before launch.</p>
<h2>7. Managing cookies</h2>
<p>You can delete or block cookies and local storage data in your browser settings. Blocking third-party cookies may limit the reservation function.</p>
<h2>8. Contact</h2>
${contactBlock}
`;

export const en: Record<LegalSlug, LegalEntry> = {
  impressum: { title: 'Legal Notice', html: impressum.trim() },
  datenschutz: { title: 'Privacy Policy', html: datenschutz.trim() },
  cookies: { title: 'Cookie Policy', html: cookies.trim() },
};
