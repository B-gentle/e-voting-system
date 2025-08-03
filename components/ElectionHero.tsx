"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ElectionHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-primary text-white py-14 px-2 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight"
      >
        Run Your Next Election<br />With Ease
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-xl mx-auto mb-7 text-base md:text-lg text-white"
      >
        Join hundreds of organizations that trust Vobe for secure, transparent, and efficient voting. Start your first election today.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          href="/create-election"
          className="bg-white text-primary font-semibold px-6 py-2 rounded shadow hover:bg-[#ede9fe] transition text-base"
        >
          Create an election
        </Link>
        <Link
          href="/sign-up"
          className="bg-[#d6d6e7] text-gray-700 font-semibold px-6 py-2 rounded shadow hover:bg-[#e5e5f7] transition text-base"
        >
          Try vobe free
        </Link>
      </motion.div>
    </motion.section>
  );
}