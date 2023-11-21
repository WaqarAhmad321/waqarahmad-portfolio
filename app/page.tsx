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
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["400", "600", "500", "700"],
  subsets: ["latin"],
});

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
    <main className={`overflow-hidden ${barlow.className}`}>
      <section id="home">
        <Hero />
      </section>

      <section id="techstack" className="mt-16 px-6 sm:px-16">
        <TechStack />
      </section>

      <section id="projects" className="mt-8">
        <ProjectsTitle title="featured projects" />
      </section>

      <section className="mt-24 md:mt-12">
        <Projects projects={projectsArray} />
        <div className="mt-12 flex justify-center">
          <Link href="/projects">
            <Button variant="outlined" size="md">
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
