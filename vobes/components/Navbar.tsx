"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";


export default function Navbar({ username }: { username?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-8 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="font-bold text-xl text-blue-light">E-Vote</div>
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle nav"
        >
          <RiMenuUnfold4Line size={28} />
        </button>
      </div>
      <div
        className={`flex-col sm:flex-row flex gap-8 sm:gap-6 items-center w-full sm:w-auto transition-all duration-200 ${
          open ? "flex" : "hidden sm:flex"
        }`}
      >
        <Link href="/" className={pathname === "/" ? "text-[#985FF5]" : ""}>
          Home
        </Link>
        <Link
          href="/#features"
          className={pathname === "/#features" ? "text-[#985FF5]" : ""}
        >
          Features
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "text-[#985FF5]" : ""}
        >
          Contact us
        </Link>
        {username === "admin" && <Link href="/admin">Admin</Link>}
        {!username && (
          <Link
            href="/login"
            className="bg-primary text-white p-8 py-2 rounded-lg md:ml-8"
          >
            Login
          </Link>
        )}
        {username && (
          <span className="bg-blue-light px-3 py-1 rounded text-white">
            {username}
          </span>
        )}
      </div>
    </nav>
  );
}
