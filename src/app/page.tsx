import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Cases } from "@/components/Cases";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <Cases />
      <Contacts />
      <Footer />
    </main>
  );
}
