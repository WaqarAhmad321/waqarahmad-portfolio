import { Projects, ProjectsTitle } from "@/components";
import allProjects, { ProjectType } from "@/lib/projects";

const allProjectsPage = () => {
  const allProjectsArray: ProjectType[] = [
    allProjects.theWildOasis,
    allProjects.worldWise,
    allProjects.carHub,
    allProjects.fastReactPizza,
    allProjects.thisWebsite,
    allProjects.usePopCorn,
    allProjects.travelList,
    allProjects.reactQuiz,
    allProjects.eatNSplit,
  ];

  return (
    <section className="mt-10">
      <ProjectsTitle title="Projects I have worked on" />
      <div className="mt-24 md:mt-10">
        <Projects projects={allProjectsArray} />
      </div>
    </section>
  );
};

export default allProjectsPage;
