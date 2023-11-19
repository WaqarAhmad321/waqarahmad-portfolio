import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import allProjects, { ProjectType } from "@/lib/projects";
import {
  Button,
  Footer,
  Hero,
  Projects,
  ProjectsTitle,
  TechStack,
} from "@/components";

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
      <section className="scroll-mb-0">
        <Hero />
      </section>

      <section id="techstack" className="mt-16 scroll-mt-20 px-6 sm:px-16">
        <TechStack />
      </section>

      <section id="projects" className="mt-8 scroll-mt-20">
        <ProjectsTitle title="featured projects" />
      </section>

      <section className="mt-24 md:mt-12">
        <Projects projects={projectsArray} />
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button variant="outlined" size="sm">
              View All Projects
              <RxArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
