import { Hero } from "@/components";
import { TechStack } from "@/components";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-16 px-6 sm:px-16">
        <TechStack />

        <div className="mt-36">
          <h1 className="text-center text-8xl font-light">Featured Projects</h1>
          <Projects />
        </div>
      </div>
    </main>
  );
}
