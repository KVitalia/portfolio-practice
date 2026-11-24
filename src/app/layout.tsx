import type { Metadata } from "next";
import { istokWeb, wixMadeforText } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitalia Kumeska",
  description: "Design built on how people choose.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${istokWeb.variable} ${wixMadeforText.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">{children}</body>
    </html>
  );
}
