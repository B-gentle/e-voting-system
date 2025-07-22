"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-secondary to-background py-12 px-2 sm:px-6 flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-5xl font-extrabold text-primary mb-4"
      >
        Secure & Modern E-Voting Platform
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-blue-dark text-lg sm:text-2xl mb-6 max-w-xl"
      >
        Cast your vote with confidence, transparency, and privacy. Empowering democracy through technology.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        href="/vote"
      >
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-primary-dark transition">
          Get Started
        </button>
      </motion.a>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-blue-light rounded-full mt-12"
      />
    </section>
  );
}