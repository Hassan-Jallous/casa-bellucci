import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[20vw] leading-none font-playfair font-bold text-charcoal/10 select-none">
        404
      </p>

      <h1 className="font-playfair text-3xl md:text-4xl text-charcoal -mt-6 md:-mt-10">
        Seite nicht gefunden
      </h1>

      <div className="w-16 h-px bg-olive my-6" />

      <p className="font-cormorant text-lg text-charcoal/70 max-w-md">
        Die gesuchte Seite existiert leider nicht.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block bg-terracotta text-cream font-cormorant text-lg px-8 py-3 rounded-sm hover:bg-terracotta/90 transition-colors"
      >
        Zurück zur Startseite
      </Link>
    </section>
  );
}
