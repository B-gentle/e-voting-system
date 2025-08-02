import NavbarBg from "./NavbarBg";
import UserButton from "./user-Button";
import MobileNav from "./Mobile-Nav";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavbarBg>
      <div className="hidden md:flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-light">E-Vote</Link>
        <div className="flex items-center justify-between w-full sm:w-auto">
          <NavbarLinks />
          <UserButton />
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </NavbarBg>
  );
}
