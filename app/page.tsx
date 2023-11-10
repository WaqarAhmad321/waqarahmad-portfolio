import { Hero, TechStack, Projects } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mt-16 px-6 sm:px-16">
        <TechStack />
      </section>

      <section className="mt-36">
        <h1 className="text-center text-7xl font-light">Featured Projects</h1>
        {/* <Projects /> */}
      </section>
    </main>
  );
}
