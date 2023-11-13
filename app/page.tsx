import { Hero, TechStack, Projects } from "@/components";
import ProjectsTitle from "@/components/Projects/ProjectsTitle";
import allProjects, { ProjectType } from "@/lib/projects";

export default function Home() {
  const projectsArray: ProjectType[] = [
    allProjects.theWildOasis,
    allProjects.worldWise,
    allProjects.carHub,
    allProjects.fastReactPizza,
    allProjects.thisWebsite,
    allProjects.usePopCorn,
  ];

  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mt-16 px-6 sm:px-16">
        <TechStack />
      </section>

      <section className="mt-36">
        <ProjectsTitle text="featured projects" />
      </section>

      <section className="mt-12">
        <Projects projects={projectsArray} />
      </section>
    </main>
  );
}
