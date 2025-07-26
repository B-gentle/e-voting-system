"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-12 pt-36 px-2 sm:px-6 flex flex-col items-center text-center bg-background">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:text-5xl text-3xl font-bold mb-4 md:max-w-2xl leading-14"
      >
        Vote Securely. Anywhere. Anytime.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="md:text-2xl mb-6 md:px-12 md:max-w-6xl"
      >
        Vobe is a modern e-voting platform built for transparency, speed, and
        convenience. From campus elections to organizational polls, we make it
        easy to vote and track results securely and in real time. democracy
        through technology.
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
