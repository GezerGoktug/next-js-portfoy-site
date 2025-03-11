import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Link,
} from "@heroui/react";
import { Github } from "lucide-react";
import React from "react";
import { IProject } from "./ProjectsCarousel";

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <Card
      className="w-full   shadow-foreground-200 shadow-md !bg-gradient-to-br from-zinc-900 to-stone-950 border-2 border-foreground-100 min-w-[300px]"
      isBlurred
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt="next-js-social-media"
          className="w-full object-cover    rounded-b-none"
          src={project.image}
          width="100%"
        />
      </CardBody>
      <CardFooter className="col-start gap-2 text-left min-h-[320px]">
        <h3 className="font-semibold text-xl">{project.title}</h3>
        <p className="text-foreground-700 text-sm line-clamp-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
          {project.techs.map((tech, i) => (
            <Chip
              key={"project_" + project._id + "_tech_" + i}
              className="shadow shadow-purple-900"
              color="secondary"
              variant="flat"
            >
              {tech}
            </Chip>
          ))}
        </div>
        <Link className="mt-auto" href={project.link} target="_blank">
          <Button
            startContent={<Github />}
            variant="flat"
            color="danger"
            className="font-semibold mt-3 outline-none shadow-sm shadow-pink-700"
          >
            See Projects
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
