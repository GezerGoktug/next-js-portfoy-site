import React from "react";
import { Marquee } from "../common/Marquee";
import Image from "next/image";
import Link from "next/link";
import Seperator from "../common/Seperator";

const firstRowMarqueeSkills = [
  {
    src: "/react.svg",
    href: "https://react.dev/",
    alt: "react",
  },
  {
    src: "/javascript.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "javascript",
  },
  {
    src: "/typescript.svg",
    href: "https://www.typescriptlang.org/",
    alt: "typescript",
  },
  {
    src: "/nextjs.svg",
    href: "https://nextjs.org/",
    alt: "nextjs",
  },
  {
    src: "/redux.svg",
    href: "https://redux.js.org/",
    alt: "redux-toolkit",
  },
  {
    src: "/html.svg",
    href: "https://www.w3.org/html/",
    alt: "html",
  },
  {
    src: "/css.svg",
    href: "https://www.w3.org/Style/CSS/",
    alt: "css",
  },
  {
    src: "/tailwind.svg",
    href: "https://tailwindcss.com/",
    alt: "tailwind",
  },
  {
    src: "/sass.svg",
    href: "https://sass-lang.com/",
    alt: "sass",
  },
  {
    src: "/firebase.svg",
    href: "https://firebase.google.com/",
    alt: "firebase",
  },
  {
    src: "/bootstrap.svg",
    href: "https://getbootstrap.com/",
    alt: "bootstrap",
  },
];

const secondRowMarqueeSkills = [
  {
    src: "/java.svg",
    href: "https://www.java.com/tr/",
    alt: "java",
  },
  {
    src: "/spring.svg",
    href: "https://spring.io/",
    alt: "spring",
  },
  {
    src: "/nodejs.svg",
    href: "https://nodejs.org/en",
    alt: "nodejs",
  },
  {
    src: "/prisma.svg",
    href: "https://www.prisma.io/",
    alt: "prisma",
  },
  {
    src: "/hibernate.svg",
    href: "https://hibernate.org/",
    alt: "hibernate",
  },
  {
    src: "/postgres.svg",
    href: "https://www.postgresql.org/",
    alt: "postgresql",
  },
  {
    src: "/mongodb.svg",
    href: "https://www.mongodb.com/",
    alt: "mongodb",
  },
  {
    src: "/docker.svg",
    href: "https://www.docker.com/",
    alt: "docker",
  },
  {
    src: "/netlify.svg",
    href: "https://www.netlify.com/",
    alt: "netlify",
  },
  {
    src: "/vercel.svg",
    href: "https://vercel.com/",
    alt: "vercel",
  },
  {
    src: "/postman.svg",
    href: "https://www.postman.com/",
    alt: "postman",
  },
];

const SkillCard = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="relative size-12 xs:size-16 sm:size-24 lg:size-28 p-2">
        <Image fill src={src} alt={alt} className="object-cover" priority />
      </div>
    </Link>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="pb-32 relative ">
      <div className="container ">
        <h3 className="text-center z-0 w-max mx-auto text-4xl relative  font-semibold my-12">
          <span className=" -z-[1] inline-block bg-skew after:bg-gradient-to-br after:from-zinc-800 after:to-stone-800 ">
            Skills
          </span>
        </h3>
        <div className="relative col-center w-full  overflow-hidden ">
          <Marquee
            pauseOnHover
            className="[--duration:20s] [--gap:20px]  sm:[--gap:40px] "
          >
            {firstRowMarqueeSkills.map((skill, i) => (
              <SkillCard
                key={"skill_" + i}
                src={skill.src}
                alt={skill.alt}
                href={skill.href}
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] [--gap:20px]  sm:[--gap:40px] mt-12 "
          >
            {secondRowMarqueeSkills.map((skill, i) => (
              <SkillCard
                key={"skill_" + i}
                src={skill.src}
                alt={skill.alt}
                href={skill.href}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
      <Seperator />
    </div>
  );
};

export default Skills;
