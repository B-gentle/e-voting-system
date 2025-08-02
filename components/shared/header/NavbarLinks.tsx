"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarLinks = ({ username, onClickLink }: { username?: string, onClickLink?: () => void }) => {
  const pathname = usePathname();
 
  return (
      <div
        className="flex flex-col md:flex-row gap-8 sm:gap-6 md:items-center w-full sm:w-auto transition-all duration-200"
      >
        <Link href="/" className={pathname === "/" ? "text-[#985FF5]" : ""}
        onClick={onClickLink}>
          Home
        </Link>
        <Link
          href="/#features"
          className={pathname === "/#features" ? "text-[#985FF5]" : ""}
          onClick={onClickLink}
        >
          Features
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "text-[#985FF5]" : ""}
          onClick={onClickLink}
        >
          Contact us
        </Link>
        {username === "admin" && <Link href="/admin">Admin</Link>}
      </div>
    
  );
};

export default NavbarLinks;
