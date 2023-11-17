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
      <Hero />

      <section className="mt-16 px-6 sm:px-16">
        <TechStack />
      </section>

      <section className="mt-8">
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

      <section>
        <Footer />
      </section>
    </main>
  );
}
