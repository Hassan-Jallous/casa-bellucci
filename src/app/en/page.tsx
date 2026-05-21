import VideoHero from '@/components/sections/VideoHero';
import About from '@/components/sections/About';
import MenuSection from '@/components/sections/MenuSection';
import Gallery from '@/components/sections/Gallery';

export default function HomeEN() {
  return (
    <main>
      <VideoHero locale="en" />
      <About locale="en" />
      <MenuSection locale="en" />
      <Gallery locale="en" />
    </main>
  );
}
