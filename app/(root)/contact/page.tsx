"use client";
import React from "react";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import contact from "@/assets/contact-us.png";
import dotGrid from "@/assets/DotGrid.png";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-32 px-2 relative">
      {/* Purple slant background */}
      <div className="absolute top-0 left-0 w-full h-104 bg-primary z-0 contact-clippath" />
      <div className="relative z-10 w-full max-w-3xl mx-auto mt-12">
        <Image
          src={dotGrid}
          alt=""
          width={100}
          height={100}
          className="hidden md:block absolute right-0 top-0"
        />
        <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
            <p className="mb-6 text-gray-600">
              We&#39;re here for you, how can we help you?
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#7c3aed] transition"
              />
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#7c3aed] transition"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary transition resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-white font-semibold py-2 rounded mt-2 hover:bg-[#985FF5] transition"
              >
                Send message
              </button>
            </form>
          </div>
          {/* Right: Contact Info */}
          <div className="flex flex-col gap-6 h-full items-stretch justify-between">
            {/* Illustration */}
            <Image
              src={contact}
              alt="Contact illustration"
              className="w-40 mx-auto mt-4 pt-16"
              style={{ minHeight: 100 }}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1 mr-3" size={30} />
              <span className="text-gray-700 text-sm">
                404, oxon road, uyo, Akwa-ibom state, Nigeria.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" size={28} />
              <span className="text-gray-700 text-sm">+234 90504300265</span>
            </div>
            <div className="flex items-center gap-3">
              <MdMail className="text-primary mr-3" size={30} />
              <span className="text-gray-700 text-sm mr-3">vobe@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
