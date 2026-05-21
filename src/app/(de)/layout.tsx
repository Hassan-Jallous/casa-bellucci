import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Casa Bellucci | Italienisches Restaurant Berlin Kudamm",
    template: "%s | Casa Bellucci",
  },
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header locale="de" />
      {children}
      <Footer locale="de" />
      <CookieBanner locale="de" />
    </>
  );
}
