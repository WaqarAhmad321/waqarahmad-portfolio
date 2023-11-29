"use client";

import { motion } from "framer-motion";

import { barlow } from "@/lib/fonts";
import { Button, Projects, ProjectsTitle } from "@/components";
import allProjects, { ProjectType } from "@/lib/projects";
import { RxArrowRight } from "react-icons/rx";

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
      className={`mt-10 will-change-transform md:will-change-auto ${barlow.className}`}
      initial={{ opacity: 0, x: +1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: +1000 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <ProjectsTitle title="Projects I have worked on" />
      <div className="mt-24 md:mt-10">
        <Projects projects={allProjectsArray} />
        <Button variant="outlined" size="md">
          Go Back Home
          <RxArrowRight />
        </Button>
      </div>
    </motion.section>
  );
};

export default allProjectsPage;
