"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "./Rating";
import { testimonials } from "@/lib/constants";

const stats = [
  { label: "Clients", value: "500 +" },
  { label: "community groups", value: "500 +" },
  { label: "Elections hosted", value: "500 +" },
  { label: "Total votes cast", value: "500 +" },
];

export default function TrustBanner() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-background py-16 px-2 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:text-5xl text-3xl font-bold mb-4 text-center"
      >
        Trusted by Organizations Worldwide
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="md:text-xl mb-6 text-center md:px-12 max-w-4xl mx-auto"
      >
        Join hundreds of organizations that have transformed their voting
        processes with Vobe. See what they have to say about their experience.
      </motion.p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
            <span className="text-base md:text-lg mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Carousel */}
      <div className="bg-white rounded-xl shadow-md max-w-2xl mx-auto p-8 mb-4 relative">
        <button
          aria-label="Previous"
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-500 text-xl"
        >
          &#8592;
        </button>
        <button
          aria-label="Next"
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-500 text-xl"
        >
          &#8594;
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <FaQuoteLeft className="text-4xl text-purple-600 mx-auto mb-4" />
            <p className="text-lg md:text-xl mb-6">{testimonials[current].text}</p>
            <div className="flex justify-center mb-4">
             <Rating value={testimonials[current].rating} />
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div className="text-left">
                <div className="font-bold">{testimonials[current].name}</div>
                <div className="text-purple-600 text-sm">{testimonials[current].role}</div>
                <div className="text-gray-500 text-xs">{testimonials[current].degree}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Carousel dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-purple-600" : "bg-purple-200"}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}