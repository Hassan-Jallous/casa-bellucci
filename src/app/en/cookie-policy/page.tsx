import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy of Casa Bellucci. Information about the use of cookies on our website.',
  alternates: {
    canonical: 'https://casabellucci.de/en/cookie-policy',
    languages: {
      de: 'https://casabellucci.de/cookie-richtlinie-eu',
      en: 'https://casabellucci.de/en/cookie-policy',
      it: 'https://casabellucci.de/it/politica-cookie',
    },
  },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Cookie Policy
        </h1>
        <div className="mt-2 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 space-y-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              What Are Cookies?
            </h2>
            <p className="mt-3">
              Cookies are small text files that are stored on your device when you visit our website.
              They help us provide you with a better experience.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Essential Cookies
            </h2>
            <p className="mt-3">
              These cookies are necessary for the website to function and cannot be disabled.
              They are usually set in response to actions you take, such as setting your privacy preferences.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Your Choices
            </h2>
            <p className="mt-3">
              You can set your browser to block or alert you about these cookies.
              However, some parts of the site may not function properly without them.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
