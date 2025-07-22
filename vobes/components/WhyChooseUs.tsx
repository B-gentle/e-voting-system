"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Secure & Private",
    desc: "Votes are confidential and tamper-proof, using best-in-class technology.",
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path d="M12 16v-4M12 8h.01" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Transparent Results",
    desc: "Live results are visible to all voters, ensuring fair elections.",
    icon: (
      <svg className="w-10 h-10 text-blue-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="10" width="4" height="11" />
        <rect x="10" y="6" width="4" height="15" />
        <rect x="17" y="2" width="4" height="19" />
      </svg>
    ),
  },
  {
    title: "Easy to Use",
    desc: "Vote from anywhere, anytime with a simple and intuitive interface.",
    icon: (
      <svg className="w-10 h-10 text-primary-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5v14" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Admin Controls",
    desc: "Admins can create ballots and manage elections seamlessly.",
    icon: (
      <svg className="w-10 h-10 text-blue-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-2 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-dark text-base sm:text-lg"
        >
          Discover the advantages of our e-voting platform for voters and organizers alike.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {reasons.map(({ title, desc, icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {icon}
            <h3 className="font-semibold text-primary mt-4 mb-2">{title}</h3>
            <p className="text-blue-dark">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}