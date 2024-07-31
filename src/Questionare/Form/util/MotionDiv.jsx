import React, { useState } from "react";
import { motion } from "framer-motion";

const flipVariants = {
  initial: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    rotateX: 90,
    scale: 0.9,
    transition: {
      duration: 0.75,
    },
  },
  enter: {
    opacity: 1,
    rotateX: -90,
    scale: 0.9,
    transition: {
      duration: 0.75,
    },
  },
};
function DivMotion({ children, className }, ref) {
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={flipVariants}
      initial="enter"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default DivMotion;
