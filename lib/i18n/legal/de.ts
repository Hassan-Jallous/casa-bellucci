import type { LegalEntry, LegalSlug } from './index';

const contactBlock = `
<p>
  Bellucci Gastronomie GmbH<br>
  Kurfürstendamm 63<br>
  10707 Berlin<br>
  Deutschland<br>
  Telefon: <a href="tel:+491623009925">+49 (0) 162 3009925</a><br>
  E-Mail: <a href="mailto:info@casabellucci.de">info@casabellucci.de</a>
</p>
`;

const impressum = `
<h2>Angaben gemäß § 5 TMG</h2>
${contactBlock}
<h2>Handelsregister</h2>
<p>
  Handelsregister: HRB 227777 B<br>
  Registergericht: Amtsgericht Charlottenburg
</p>
<h2>Vertreten durch</h2>
<p>Herr A. Hess</p>
<h2>Umsatzsteuer</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE273611502</p>
<h2>Aufsichtsbehörde</h2>
<p>
  Ordnungsamt Charlottenburg-Wilmersdorf<br>
  Hohenzollerndamm 174-177<br>
  10713 Berlin
</p>
<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
${contactBlock}
<h2>Streitschlichtung</h2>
<p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
<h2>Haftung für Inhalte</h2>
<p>Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.</p>
<h2>Urheberrecht</h2>
<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
<h2>Bildnachweis</h2>
<p>Die Bilder auf dieser Website stammen von Bellucci Gastronomie GmbH und Bellucci Bar Gastronomie GmbH.</p>
`;

const datenschutz = `
<h2>1. Verantwortliche Stelle</h2>
${contactBlock}
<p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.</p>
<h2>2. Bereitstellung der Website und Server-Logdaten</h2>
<p>Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Zugriffsdaten, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte URL, Referrer, Browser- und Betriebssysteminformationen. Die Verarbeitung ist erforderlich, um die Website sicher und stabil auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
<h2>3. Kontaktaufnahme</h2>
<p>Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist je nach Anlass Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.</p>
<h2>4. Reservierungen über Quandoo</h2>
<p>Für Online-Reservierungen binden wir das Buchungswidget von Quandoo ein. Anbieter ist Quandoo GmbH, Sonnenburger Str. 73, 10437 Berlin. Wenn Sie die Reservierungsfunktion nutzen, können personenbezogene Daten und technische Nutzungsdaten an Quandoo übermittelt und dort verarbeitet werden. Weitere Informationen finden Sie in der Datenschutzerklärung von Quandoo: <a href="https://www.quandoo.de/data_privacy/" target="_blank" rel="noopener">https://www.quandoo.de/data_privacy/</a>.</p>
<h2>5. Google Fonts</h2>
<p>Diese Website lädt Schriftarten über Google Fonts. Beim Abruf der Schriftdateien kann Ihre IP-Adresse an Google-Server übermittelt werden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Rechtsgrundlage ist unser berechtigtes Interesse an einer konsistenten und performanten Darstellung der Website gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
<h2>6. Lokale Speicherung im Browser</h2>
<p>Die Website speichert eine ausdrücklich gewählte Sprache lokal im Browser unter dem Schlüssel <code>cb-lang</code>. Diese Speicherung dient nur der Bedienbarkeit und wird nicht zu Analyse- oder Werbezwecken verwendet. Der interne Admin-Bereich nutzt <code>sessionStorage</code>, um ein Admin-Token während der Sitzung zu halten.</p>
<h2>7. Keine Analytics- oder Werbe-Tags im aktuellen Build</h2>
<p>Im aktuellen Next.js-Build sind keine Google-Analytics-, Google-Ads-, Google-Tag-Manager- oder Meta-Pixel-Skripte eingebunden. Sollte Tracking künftig ergänzt werden, müssen diese Datenschutzhinweise und die Cookie-Richtlinie vor dem Einsatz aktualisiert werden.</p>
<h2>8. Ihre Rechte</h2>
<p>Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.</p>
<h2>9. Speicherdauer</h2>
<p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
`;

const cookies = `
<h2>1. Einführung</h2>
<p>Diese Cookie-Richtlinie beschreibt die tatsächlich im aktuellen Next.js-Build eingesetzten Cookies, lokalen Speichermechanismen und externen Dienste.</p>
<h2>2. Technisch notwendige lokale Speicherung</h2>
<p>Die Website speichert die von Ihnen aktiv gewählte Sprache lokal im Browser unter <code>cb-lang</code>. Diese Speicherung ist funktional und dient nur dazu, Ihre Sprachwahl auf derselben URL beizubehalten.</p>
<h2>3. Admin-Sitzung</h2>
<p>Der interne Admin-Bereich speichert nach erfolgreichem Login ein Admin-Token im <code>sessionStorage</code>. Dieser Speicher ist nur für berechtigte Administratoren relevant und wird beim Schließen der Sitzung verworfen.</p>
<h2>4. Quandoo-Reservierungswidget</h2>
<p>Auf der Reservierungsseite wird das Quandoo-Buchungswidget geladen. Quandoo kann dabei Cookies, lokale Speicherung oder ähnliche Technologien einsetzen, um die Reservierungsfunktion bereitzustellen. Weitere Informationen finden Sie bei Quandoo: <a href="https://www.quandoo.de/data_privacy/" target="_blank" rel="noopener">https://www.quandoo.de/data_privacy/</a>.</p>
<h2>5. Google Fonts</h2>
<p>Die Website lädt Schriftarten von Google Fonts. Dabei können technische Zugriffsdaten an Google übertragen werden. Google Fonts wird zur einheitlichen Darstellung der Website genutzt.</p>
<h2>6. Kein Cookie-Banner im aktuellen Build</h2>
<p>Der aktuelle Build zeigt kein Cookie- oder Consent-Popup und setzt keine eigenen Analytics-, Ads- oder Marketing-Cookies. Wenn künftig einwilligungspflichtige Dienste ergänzt werden, muss vor dem Live-Einsatz ein passender Consent-Mechanismus implementiert und diese Richtlinie aktualisiert werden.</p>
<h2>7. Cookies verwalten</h2>
<p>Sie können Cookies und lokale Speicherdaten über die Einstellungen Ihres Browsers löschen oder blockieren. Bei blockierten Drittanbieter-Cookies kann die Reservierungsfunktion eingeschränkt sein.</p>
<h2>8. Kontakt</h2>
${contactBlock}
`;

export const de: Record<LegalSlug, LegalEntry> = {
  impressum: { title: 'Impressum', html: impressum.trim() },
  datenschutz: { title: 'Datenschutzerklärung', html: datenschutz.trim() },
  cookies: { title: 'Cookie-Richtlinie', html: cookies.trim() },
};

export const LEGAL_MODIFIED: Record<LegalSlug, string> = {
  impressum: '2026-06-05T00:00:00',
  datenschutz: '2026-06-05T00:00:00',
  cookies: '2026-06-05T00:00:00',
};
