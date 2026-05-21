import VideoHero from "@/components/sections/VideoHero";
import About from "@/components/sections/About";
import MenuSection from "@/components/sections/MenuSection";
import Terrace from "@/components/sections/Terrace";
import Gallery from "@/components/sections/Gallery";
import Events from "@/components/sections/Events";
import Reservation from "@/components/sections/Reservation";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <VideoHero locale="de" />
      <About locale="de" />
      <MenuSection locale="de" />
      <Terrace locale="de" />
      <Gallery locale="de" />
      <Events locale="de" />
      <Reservation locale="de" />
      <Press locale="de" />
      <Contact locale="de" />
    </>
  );
}
