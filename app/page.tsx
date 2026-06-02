import { UIProvider } from '@/components/UIProvider';
import { Header } from '@/components/sections/Header';
import { MobileNav } from '@/components/sections/MobileNav';
import { ImageHero } from '@/components/effects';
import { About } from '@/components/sections/About';
import { MenuSection } from '@/components/sections/MenuSection';
import { Terrace } from '@/components/sections/Terrace';
import { Gallery } from '@/components/sections/Gallery';
import { Reservation } from '@/components/sections/Reservation';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Lightbox } from '@/components/sections/Lightbox';

export default function Home() {
  return (
    <UIProvider>
      <div id="top">
        <Header />
        <MobileNav />
        <ImageHero />
        <About />
        <MenuSection />
        <Terrace />
        <Gallery />
        <Reservation />
        <Contact />
        <Footer />
        <Lightbox />
      </div>
    </UIProvider>
  );
}
