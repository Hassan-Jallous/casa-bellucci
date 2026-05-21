import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import Reservation from "@/components/sections/Reservation";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Kontakt und Anfahrt zu Casa Bellucci am Kurfuerstendamm 63, 10707 Berlin Charlottenburg. Telefon, E-Mail und Google Maps.",
  openGraph: {
    title: "Kontakt & Anfahrt | Casa Bellucci",
    description:
      "Kurfuerstendamm 63, 10707 Berlin. Direkt an der U-Bahn Station Adenauerplatz. Telefon und Wegbeschreibung.",
    url: "https://casabellucci.de/kontakt-anfahrt",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/kontakt-anfahrt",
    languages: {
      de: "https://casabellucci.de/kontakt-anfahrt",
      en: "https://casabellucci.de/en/contact",
      it: "https://casabellucci.de/it/contatto",
    },
  },
};

export default function KontaktAnfahrtPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Kontakt & Anfahrt", url: "https://casabellucci.de/kontakt-anfahrt" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="bg-charcoal pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold tracking-tight text-cream sm:text-6xl">
            Kontakt &amp; Anfahrt
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-terracotta/60" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-xl font-light leading-relaxed tracking-wide text-cream/70">
            Sie finden uns am Kurfuerstendamm 63 in Berlin Charlottenburg.
            Direkt an der U-Bahn Station Adenauerplatz.
          </p>
        </div>
      </section>

      <Contact locale="de" />
      <Reservation locale="de" />
    </>
  );
}
