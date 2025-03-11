"use client";

import { motion, MotionProps } from "framer-motion";

import { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  as?: keyof HTMLElementTagNameMap | undefined;
  children: ReactNode;
  className?: string;
}

const MotionWrapper = ({ as, children, ...props }: MotionWrapperProps) => {
  const MotionComp = as ? motion[as] : motion.div;

  return <MotionComp {...props}>{children}</MotionComp>;
};

export default MotionWrapper;
