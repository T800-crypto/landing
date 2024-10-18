import { Hero, About, Services, Mission } from "@/ui/sections";

export default function Home() {
  return (
    <main className="md:gap-36 min-h-screen font-[family-name:var(--font-chakra-petch)]">
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Services />
      <Mission />
    </main>
  );
}
