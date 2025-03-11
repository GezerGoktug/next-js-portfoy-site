import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import Seperator from "../common/Seperator";

const Projects = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/project`, {
    headers: {
      "X-Api-Key": process.env.API_KEY as string,
    },
    cache: "no-cache",
  });

  const projects = await res.json();

  return (
    <div
      id="projects"
      className="relative pt-4 pb-12 bg-[url('/bg-pattern.png')] bg-center bg-cover "
    >
      <div className="container">
        <h3 className="text-center z-0 w-max mx-auto text-4xl relative  font-semibold my-12">
          <span className=" -z-[1] inline-block bg-skew after:bg-gradient-to-br after:from-zinc-800 after:to-stone-800 ">
            Projects
          </span>
        </h3>

        <ProjectsCarousel projects={projects?.data} />
      </div>
      <Seperator />
    </div>
  );
};

export default Projects;
