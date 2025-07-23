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
      className="bg-primary-dark text-white pt-12 pb-4 px-2"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-primary">
          <div className="md:col-span-2 md:max-w-2/3">
            <h3 className="font-bold text-lg mb-2">VOBE</h3>
            <p className="text-sm text-gray-300">
              Transforming democratic participation through secure, accessible,
              and transparent online voting. Empowering organizations to make
              decisions together, anywhere, anytime.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-secondary-light">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-secondary-light"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-secondary-light">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-secondary-light">
                  Use cases
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/newsletter" className="hover:text-secondary-light">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-light">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-secondary-light">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 border-b border-primary">
          <h4 className="font-bold text-xl mb-2 text-center">
            Never miss an update
          </h4>
          <p className="text-center text-gray-300 mb-4 text-sm">
            Subscribe to our newsletter for product updates, voting best
            practices, and exclusive insights on digital democracy.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-primary-light text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary-light text-white px-6 py-2 rounded font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} Vobe. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-secondary-light">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-secondary-light"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
