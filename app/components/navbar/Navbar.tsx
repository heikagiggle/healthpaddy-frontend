"use client";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { navigation } from "../../utils/constants";
import Logo from "../icons/logo";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center text-[#181818] py-6 px-6 md:px-12 w-full">
        <div className="flex justify-start items-center">
          <Logo />
        </div>

        {/* Desktop navbar */}
        <ul className="hidden md:flex lg:items-center gap-x-10 text-sm">
          {navigation.map((navItem, index) => {
            const { href, title } = navItem;
            return (
              <li key={index}>
                <Link
                  href={href}
                  className="flex items-center gap-1 hover:text-textPrimary transition-all cursor-pointer"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <NavMobile />
      </div>
    </nav>
  );
};

export default Navbar;
