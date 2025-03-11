"use client";
import React, { useEffect, useState } from "react";
import { Safari } from "./Safari";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HeroRight = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const animation = isMobile
    ? {
        initial: { y: 20, opacity: 0, filter: "blur(10px)" },
        animate: { y: 0, opacity: 1, filter: "blur(0px)" },
      }
    : {
        initial: { x: 20, opacity: 0, filter: "blur(10px)" },
        animate: { x: 0, opacity: 1, filter: "blur(0px)" },
      };

  if (!mount) return null;

  return (
    <motion.div
      {...{ ...animation }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex-1 w-[95%] mx-auto relative   shadow-lg border-2 border-foreground-200  shadow-foreground-200 rounded-lg"
    >
      <Safari videoSrc="/terminal.webm" className="size-full" />
    </motion.div>
  );
};

export default HeroRight;
