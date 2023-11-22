"use client";

import { Projects, ProjectsTitle } from "@/components";
import allProjects, { ProjectType } from "@/lib/projects";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {
    x: 100,
  },
  animate: {
    x: 0,
  },
  exitState: {
    x: 100,
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
    <AnimatePresence>
      <motion.section
        className="mt-10 will-change-transform"
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
    </AnimatePresence>
  );
};

export default allProjectsPage;
