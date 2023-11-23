"use client";

import { Projects, ProjectsTitle } from "@/components";
import allProjects, { ProjectType } from "@/lib/projects";
import { motion } from "framer-motion";

const variants = {
  initial: {
    // opacity: 0,
    x: 100,
  },
  animate: {
    // opacity: 1,
    x: 0,
  },
  exitState: {
    // opacity: 0,
    x: 1,
  },
};

const allProjectsPage = () => {
  const allProjectsArray: ProjectType[] = [
    allProjects.theWildOasis,
    allProjects.worldWise,
    allProjects.carHub,
    allProjects.fastReactPizza,
    allProjects.thisWebsite,
    allProjects.usePopCorn,
    allProjects.travelList,
  ];

  return (
    <motion.section
      className="mt-10 will-change-transform md:will-change-auto"
        initial="initial"
        animate="animate"
        exit="exitState"
        variants={variants}
    >
      <ProjectsTitle title="Projects I have worked on" />
      <div className="mt-24 md:mt-10">
        <Projects projects={allProjectsArray} />
      </div>
    </motion.section>
  );
};

export default allProjectsPage;
