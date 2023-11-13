import { ProjectType } from "@/lib/projects";
import { Project } from "..";

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="w-full">
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
    </div>
  );
};

export default Projects;
