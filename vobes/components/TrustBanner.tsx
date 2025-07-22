"use client";
import { motion } from "framer-motion";

export default function TrustBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-secondary-light/20 py-6 px-2 text-center"
    >
      <span className="inline-block text-secondary-dark font-semibold text-lg">
        Trusted by hundreds of organizations and thousands of voters.
      </span>
    </motion.section>
  );
}