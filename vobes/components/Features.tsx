"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Mobile Friendly",
    desc: "Accessible and responsive on all devices.",
    icon: (
      <svg
        className="w-8 h-8 text-secondary-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Fast Setup",
    desc: "Create and launch elections within minutes.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Open Source",
    desc: "Built transparently for your trust.",
    icon: (
      <svg
        className="w-8 h-8 text-primary-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 19V6M5 12h14" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-10 px-2 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-bold text-primary mb-4"
        >
          Platform Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary-dark text-base sm:text-lg"
        >
          Everything you need for a smooth online voting experience.
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-3xl mx-auto">
        {features.map(({ title, desc, icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center text-center bg-background rounded-lg p-6 border border-secondary-light w-full sm:w-1/3 mb-4 sm:mb-0"
          >
            {icon}
            <div className="mt-3 font-semibold text-primary">{title}</div>
            <div className="text-secondary-dark text-sm mt-2">{desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
