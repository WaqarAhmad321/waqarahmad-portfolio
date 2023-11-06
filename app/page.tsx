import { Hero } from "@/components";
import { TechStack } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mx-auto mt-52  max-w-[1440px] px-6 sm:px-16">
        <TechStack />
      </div>
    </main>
  );
}
