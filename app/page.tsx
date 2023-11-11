import { Hero, TechStack, Projects } from "@/components";
import allProjects, { ProjectType } from "@/lib/projects";

export default function Home() {
  const projectsArray: ProjectType[] = [
    allProjects.theWildOasis,
    allProjects.worldWise,
    allProjects.fastReactPizza,
    allProjects.usePopCorn,
    allProjects.thisWebsite,
  ];
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mt-16 px-6 sm:px-16">
        <TechStack />
      </section>

      <section className="mt-36">
        <h1 className="text-center text-7xl font-light">Featured Projects</h1>
      </section>

      <section>
        <Projects projects={projectsArray} />
      </section>
    </main>
  );
}
