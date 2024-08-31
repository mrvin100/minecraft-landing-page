import { Footer } from "@/components/footer";
import { MiniGames } from "@/components/mini-games";
import { Navigation } from "@/components/navigation";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
<div className="flex flex-col min-h-screen">
      <Navigation/>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Serveur Minecraft Mini-Jeux</h1>
        <Suspense fallback={<div>Chargement des mini-jeux...</div>}>
          <MiniGames />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
