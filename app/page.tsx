import Architecture from "@/components/landing-architecture";
import Detail from "@/components/landing-detail";
import Diversity from "@/components/landing-diversity";
import Fooder from "@/components/landing-fooder";
import Hero from "@/components/landing-hero";
import Module from "@/components/landing-module";
import Navbar from "@/components/landing-navbar";

export default function Home() {
  return (
    <main className="bg-black relative overflow-hidden">
      <Navbar />
      <Hero />
      <Module />
      <Detail />
      <Diversity />
      <Architecture />
      <Fooder />
    </main>
  );
}
