"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-white py-6 px-2 mt-10"
    >
      <div className="bg-primary"></div>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary-dark">
        <div className="text-lg font-semibold">E-Vote Platform &copy; {new Date().getFullYear()}</div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-secondary-light">Home</Link>
          <Link href="/vote" className="hover:text-secondary-light">Vote</Link>
          <Link href="/results" className="hover:text-secondary-light">Results</Link>
          <Link href="/admin" className="hover:text-secondary-light">Admin</Link>
        </div>
      </div>
    </motion.footer>
  );
}