"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({ username }: { username?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary px-2 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center shadow text-white">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="font-bold text-xl text-blue-light">E-Vote</div>
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle nav"
        >
          <svg width="28" height="28" fill="currentColor">
            <rect y="6" width="28" height="4" rx="2"/>
            <rect y="14" width="28" height="4" rx="2"/>
          </svg>
        </button>
      </div>
      <div
        className={`flex-col sm:flex-row flex gap-4 sm:gap-6 items-center w-full sm:w-auto transition-all duration-200 ${
          open ? "flex" : "hidden sm:flex"
        }`}
      >
        <Link href="/" className={pathname === "/" ? "underline" : ""}>Home</Link>
        <Link href="/vote" className={pathname === "/vote" ? "underline" : ""}>Vote</Link>
        <Link href="/results" className={pathname === "/results" ? "underline" : ""}>Results</Link>
        {username === "admin" && <Link href="/admin">Admin</Link>}
        {!username && <Link href="/login">Login</Link>}
        {username && <span className="bg-blue-light px-3 py-1 rounded text-white">{username}</span>}
      </div>
    </nav>
  );
}