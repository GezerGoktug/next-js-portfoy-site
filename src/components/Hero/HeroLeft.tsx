import React from "react";
import { Button, Link } from "@heroui/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import MediumIcon from "../icons/MediumIcon";
import MotionWrapper from "../common/MotionWrapper";
import TypingAnimation from "../common/TypingAnimation";

const social_links = [
  {
    icon: Github,
    href: "https://github.com/GezerGoktug",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/goktug.gezerr",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/göktuğgezer",
  },
  {
    icon: MediumIcon,
    href: "https://medium.com/@ggezer780",
  },
];

const HeroLeft = () => {
  return (
    <div className="flex-1 col-start gap-3 mt-12 lg:mt-0 ">
      <MotionWrapper
        as="div"
        initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        <TypingAnimation
          sequence={["Hello", 1000]}
          speed={30}
          className="text-5xl md:text-7xl xl:text-8xl font-semibold text-gradient-r  from-zinc-300  to-stone-500 "
        />
      </MotionWrapper>
      <MotionWrapper
        as="div"
        initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <TypingAnimation
          sequence={[400, "I'am Göktuğ Gezer"]}
          speed={50}
          className="text-4xl md:text-5xl xl:text-6xl font-semibold text-gradient-r overflow-visible from-foreground-500  to-foreground-400"
        />
      </MotionWrapper>
      <MotionWrapper
        as="p"
        initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.7 }}
        className="xl:text-lg"
      >
        I am a passionate software developer who loves research and learning.
      </MotionWrapper>
      <MotionWrapper
        as="div"
        initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 1 }}
        className="row-center gap-6"
      >
        {social_links.map(({ icon: Icon, href }, i) => (
          <Button
            key={"social_media_link" + i}
            size="lg"
            color="default"
            isIconOnly
            radius="full"
            variant="flat"
            className="font-semibold outline outline-foreground-100 outline-offset-2 "
          >
            <Link color="foreground" href={href} target="_blank">
              <Icon color="#ffffff" />
            </Link>
          </Button>
        ))}
      </MotionWrapper>
    </div>
  );
};

export default HeroLeft;
