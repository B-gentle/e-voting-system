"use client"
import React from "react";
import HowItWorksCard from "./shared/reusableCards/HowItWorksCard";
import { howItWorksSteps } from "@/lib/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-18 px-4 sm:px-6 flex flex-col items-center "
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:text-5xl text-3xl font-bold mb-4 text-center"
      >
        How It Works
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="md:text-xl mb-6 text-center md:px-12 max-w-4xl mx-auto"
      >
        Running an election has never been easier. Our streamlined process takes
        you from setup to results in just four simple steps.
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col gap-6"
      >
        {howItWorksSteps.map((step, index) => (
          <motion.div key={index} variants={cardVariants}>
            <HowItWorksCard
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;