import type { Metadata } from "next";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Reservation from "@/components/sections/Reservation";
import { generateBreadcrumbSchema, generateEventSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Events & DJ",
  description:
    "Events und DJ bei Casa Bellucci am Kurfuerstendamm. Freitags und samstags Live-DJ, gute Musik und lange Abende in Berlin Charlottenburg.",
  openGraph: {
    title: "Events & DJ | Casa Bellucci",
    description:
      "Freitags und samstags Live-DJ am Kurfuerstendamm. Loungige Sounds und lange Abende bei Casa Bellucci.",
    url: "https://casabellucci.de/events-dj",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/events-dj",
    languages: {
      de: "https://casabellucci.de/events-dj",
      en: "https://casabellucci.de/en/events-dj",
      it: "https://casabellucci.de/it/eventi-dj",
    },
  },
};

export default function EventsDjPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Events & DJ", url: "https://casabellucci.de/events-dj" },
  ]);

  const eventSchemas = generateEventSchema([
    {
      name: "DJ Night bei Casa Bellucci",
      description:
        "Freitags und samstags Live-DJ mit loungigen Sounds und langen Abenden am Kurfuerstendamm.",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {eventSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <section className="bg-charcoal pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="font-cormorant text-sm uppercase tracking-[0.3em] text-terracotta">
            Freitag &amp; Samstag
          </span>
          <h1 className="mt-4 font-playfair text-5xl font-bold tracking-tight text-cream sm:text-6xl">
            Events &amp; DJ
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-terracotta/60" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-xl font-light leading-relaxed tracking-wide text-cream/70">
            Freitags und samstags verwandelt sich Casa Bellucci in einen Ort
            fuer gute Musik und lange Abende. Unsere DJs begleiten den Abend
            mit Sounds, die zur Stimmung passen, von loungig bis lebendig.
          </p>
        </div>
      </section>

      <Events locale="de" />
      <Gallery locale="de" />
      <Reservation locale="de" />
    </>
  );
}
