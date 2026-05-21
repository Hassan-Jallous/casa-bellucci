import type { Metadata } from "next";
import Press from "@/components/sections/Press";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Presse",
  description:
    "Presseartikel und Medienberichte ueber Casa Bellucci, das italienische Restaurant am Kurfuerstendamm in Berlin Charlottenburg.",
  openGraph: {
    title: "Presse | Casa Bellucci",
    description:
      "Was die Medien ueber Casa Bellucci am Kurfuerstendamm schreiben. Presseartikel und Berichte.",
    url: "https://casabellucci.de/presse",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/presse",
    languages: {
      de: "https://casabellucci.de/presse",
      en: "https://casabellucci.de/en/press",
      it: "https://casabellucci.de/it/stampa",
    },
  },
};

const pressArticles = [
  {
    outlet: "Berliner Zeitung",
    title: "Casa Bellucci: Sizilien am Kudamm",
    date: "2025",
  },
  {
    outlet: "Berliner Morgenpost",
    title: "Die besten italienischen Restaurants in Berlin",
    date: "2025",
  },
  {
    outlet: "Tagesspiegel",
    title: "Sommerterrasse am Kurfuerstendamm",
    date: "2024",
  },
  {
    outlet: "tip Berlin",
    title: "Restaurant-Tipps Charlottenburg",
    date: "2024",
  },
  {
    outlet: "BZ",
    title: "Neues Restaurant am Kudamm",
    date: "2024",
  },
];

export default function PressePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Presse", url: "https://casabellucci.de/presse" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold tracking-tight text-charcoal sm:text-6xl">
            Presse
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-charcoal/20" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-xl font-light leading-relaxed tracking-wide text-charcoal/70">
            Was die Medien ueber Casa Bellucci schreiben.
          </p>
        </div>
      </section>

      <Press locale="de" />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-playfair text-3xl font-bold tracking-tight text-charcoal">
            Presseartikel
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-charcoal/20" />

          <div className="mt-12 flex flex-col gap-6">
            {pressArticles.map((article) => (
              <div
                key={article.title}
                className="flex flex-col gap-2 border-b border-charcoal/10 pb-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="font-cormorant text-sm uppercase tracking-wider text-terracotta">
                    {article.outlet}
                  </span>
                  <h3 className="mt-1 font-playfair text-lg font-semibold text-charcoal">
                    {article.title}
                  </h3>
                </div>
                <span className="shrink-0 font-cormorant text-sm text-charcoal/40">
                  {article.date}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-cormorant text-base text-charcoal/60">
              Fuer Presseanfragen kontaktieren Sie uns unter{" "}
              <a
                href="mailto:info@casabellucci.de"
                className="text-terracotta transition-colors duration-200 hover:text-terracotta/80"
              >
                info@casabellucci.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
