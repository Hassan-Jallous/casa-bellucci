import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600"],
});
