"use client";
import { useEffect, useState } from "react";

export default function NavbarBg({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 sm:px-6 py-4 transition-colors duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-transparent"
      }`}
    >
        {children}
    </nav>
  );
}
