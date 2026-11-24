import { Istok_Web, Wix_Madefor_Text } from "next/font/google";

export const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
});

export const wixMadeforText = Wix_Madefor_Text({
  variable: "--font-wix-madefor-text",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
});
