import VideoHero from '@/components/sections/VideoHero';
import About from '@/components/sections/About';
import MenuSection from '@/components/sections/MenuSection';
import Gallery from '@/components/sections/Gallery';

export default function HomeIT() {
  return (
    <main>
      <VideoHero locale="it" />
      <About locale="it" />
      <MenuSection locale="it" />
      <Gallery locale="it" />
    </main>
  );
}
