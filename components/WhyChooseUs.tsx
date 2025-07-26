"use client";
import { motion } from "framer-motion";
import WhyChooseUsCard from "./shared/reusableCards/WhyChooseUsCard";
import { orgUseCases, reasons } from "@/lib/constants";
import UseCaseCards from "./shared/reusableCards/UseCaseCards";

export default function WhyChooseUs() {
  return (
    <>
      <section className="py-22 px-2 sm:px-6 bg-background choose-us-bg" id="features">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Why Choose <span className="text-black">Vobe?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-dark text-base sm:text-lg"
          >
            Secure, transparent, and user-friendly e-voting solutions that
            organizations trust for their most important decisions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {reasons.map(({ title, desc, icon, backgroundColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${backgroundColor} rounded-lg shadow p-6 flex flex-col hover:shadow-lg transition`}
            >
              <WhyChooseUsCard title={title} img={icon} desc={desc} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-22 px-2 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Perfect for Every Organization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-dark text-base sm:text-lg"
          >
            From small community groups to large institutions, Vobe scales to
            meet your voting needs
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {orgUseCases.map(({ title, desc, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={` rounded-lg shadow p-3 flex flex-col items-center hover:shadow-lg hover:bg-background transition`}
            >
              <UseCaseCards title={title} desc={desc} img={icon} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
