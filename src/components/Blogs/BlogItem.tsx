import { Button, Card, CardBody, CardFooter, Image, Link } from "@heroui/react";

import React from "react";
import MediumIcon from "../icons/MediumIcon";
import { IBlog } from "./BlogsCarousel";

const BlogItem = ({ blog }: { blog: IBlog }) => {
  return (
    <Card
      className="shadow-foreground-200 shadow-md !bg-gradient-to-br from-zinc-900 to-stone-950 border-2 border-foreground-100 min-w-[300px]"
      isBlurred
    >
      <CardBody className="overflow-visible p-0 border-b-1 border-foreground-200">
        <Image
          alt="next-js-social-media"
          className="w-full object-contain h-[250px] rounded-b-none"
          src={blog.image}
          width="100%"
        />
      </CardBody>
      <CardFooter className="col-start gap-2 text-left ">
        <h3 className="font-semibold text-xl">{blog.title}</h3>
        <p className="text-foreground-700 text-sm line-clamp-4">{blog.desc}</p>
        <Link href={blog.link} target="_blank">
          <Button
            startContent={<MediumIcon color="white" />}
            variant="shadow"
            color="success"
            className="font-semibold mt-3 outline-none text-white  "
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogItem;
