import { ProjectType } from "@/lib/projects";
import dynamic from "next/dynamic";
import { Project } from "@/components";

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <>
      {projects.map(({ title, description, image, links, stack }, index) => (
        <Project
          key={index}
          index={index + 1}
          title={title}
          description={description}
          image={image}
          links={links}
          stack={stack}
        />
      ))}
    </>
  );
};

export default Projects;
