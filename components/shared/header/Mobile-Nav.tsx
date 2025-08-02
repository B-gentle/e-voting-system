"use client";
import React, { useState } from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";

const MobileNav = ({ username }: { username?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar with logo and menu button */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="font-bold text-xl text-blue-light">E-Vote</div>
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="Open nav"
        >
          <RiMenuUnfold4Line size={28} />
        </button>
      </div>

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } sm:hidden`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } sm:hidden flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-bold text-xl text-blue-light">E-Vote</span>
          <button
            className="p-2"
            onClick={() => setOpen(false)}
            aria-label="Close nav"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <nav className="flex flex-col gap-6 p-4">
          <NavbarLinks onClickLink={() => setOpen(false)} />
          {username ? (
            <span className="bg-blue-light px-3 py-1 rounded text-white mt-4">
              {username}
            </span>
          ) : (
            <Link
              href="/sign-in"
              className="bg-primary flex flex-grow-0 text-white p-8 py-2 rounded-lg md:ml-8"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
