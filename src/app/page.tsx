import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Drinks from "@/components/Drinks";
import GameDay from "@/components/GameDay";
import Hours from "@/components/Hours";
import Visit from "@/components/Visit";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Drinks />
      <GameDay />
      <Hours />
      <Visit />
      <Quotes />
      <Footer />
    </main>
  );
}
