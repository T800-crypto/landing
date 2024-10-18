import Image from "next/image";
import { Hero, About, Services, Mission } from "@/ui/sections";

export default function Home() {
  return (
    
      <main className="flex flex-col gap-20 row-start-2 items-center sm:items-start min-h-screen font-[family-name:var(--font-chakra-petch)] ">
        <Hero />
        <About />
        <Services />
        <Mission />
      </main>
    
  );
}
