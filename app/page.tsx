import {
  Hero,
  TechStack,
  Projects,
  ProjectsTitle,
  Footer,
  Button,
} from "@/components";
import allProjects, { ProjectType } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

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
      <section id="home" className="scroll-mb-0">
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
        <div className="flex justify-center">
          <Link href="/">
            <Button variant="outlined" size="lg">
              View All Projects
              <Image
                src="/public/arrow_right.svg"
                alt="Right Arrow"
                width={24}
                height={24}
              />
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
