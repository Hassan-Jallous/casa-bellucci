import type { Metadata } from "next";
import Reservation from "@/components/sections/Reservation";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tisch reservieren",
  description:
    "Tisch reservieren bei Casa Bellucci am Kurfuerstendamm in Berlin. Online-Reservierung oder telefonisch unter +49 30 88629828.",
  openGraph: {
    title: "Tisch reservieren | Casa Bellucci",
    description:
      "Reservieren Sie Ihren Tisch online oder telefonisch unter +49 30 88629828. Casa Bellucci am Kurfuerstendamm.",
    url: "https://casabellucci.de/reservierung",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/reservierung",
    languages: {
      de: "https://casabellucci.de/reservierung",
      en: "https://casabellucci.de/en/reservation",
      it: "https://casabellucci.de/it/prenotazione",
    },
  },
};

export default function ReservierungPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Reservierung", url: "https://casabellucci.de/reservierung" },
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
            Tisch reservieren
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-terracotta/60" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-xl font-light leading-relaxed tracking-wide text-charcoal/70">
            Reservieren Sie Ihren Tisch bequem online oder rufen Sie uns
            direkt an.
          </p>
        </div>
      </section>

      <Reservation locale="de" />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 sm:grid-cols-2">
            <div className="text-center">
              <h2 className="font-playfair text-2xl font-bold tracking-tight text-cream">
                Oeffnungszeiten
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-terracotta/40" />
              <div className="mt-6 flex flex-col gap-2 font-cormorant text-lg text-cream/70">
                <p>Montag bis Samstag: 09:00 - 00:00</p>
                <p>Sonntag: 09:00 - 18:00</p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-playfair text-2xl font-bold tracking-tight text-cream">
                Telefonisch reservieren
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-terracotta/40" />
              <div className="mt-6 font-cormorant text-lg text-cream/70">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-terracotta transition-colors duration-200 hover:text-terracotta/80"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-cream/50">
                  Wir freuen uns auf Ihren Anruf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
