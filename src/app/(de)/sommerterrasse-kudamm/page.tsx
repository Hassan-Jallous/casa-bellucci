import type { Metadata } from "next";
import Terrace from "@/components/sections/Terrace";
import Gallery from "@/components/sections/Gallery";
import Reservation from "@/components/sections/Reservation";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sommerterrasse am Kudamm",
  description:
    "Sommerterrasse am Kurfürstendamm in Berlin Charlottenburg. Laue Abende zwischen Olivenbaum-Schatten, Kerzenlicht und mediterraner Ruhe bei Casa Bellucci.",
  openGraph: {
    title: "Sommerterrasse am Kudamm | Casa Bellucci",
    description:
      "Ein Stück Sizilien mitten in Berlin. Sommerterrasse am Kurfürstendamm mit Olivenbaum-Schatten, Kerzenlicht und mediterraner Ruhe.",
    url: "https://casabellucci.de/sommerterrasse-kudamm",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/sommerterrasse-kudamm",
    languages: {
      de: "https://casabellucci.de/sommerterrasse-kudamm",
      en: "https://casabellucci.de/en/summer-terrace",
      it: "https://casabellucci.de/it/terrazza-estiva",
    },
  },
};

export default function SommerterrassePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Sommerterrasse", url: "https://casabellucci.de/sommerterrasse-kudamm" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="bg-olive/10 pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="font-cormorant text-sm uppercase tracking-[0.3em] text-olive">
            Berlin Charlottenburg
          </span>
          <h1 className="mt-4 font-playfair text-5xl font-bold tracking-tight text-charcoal sm:text-6xl">
            Sommerterrasse am Kudamm
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-olive/60" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-xl font-light leading-relaxed tracking-wide text-charcoal/70">
            Ein Stück Sizilien mitten in Berlin. Unsere Terrasse am
            Kurfürstendamm lädt zu langen Sommerabenden ein, umgeben von
            Olivenbaum-Schatten, frischen Kräutern und warmem Kerzenlicht.
          </p>
        </div>
      </section>

      <Terrace locale="de" />
      <Gallery locale="de" />
      <Reservation locale="de" />
    </>
  );
}
