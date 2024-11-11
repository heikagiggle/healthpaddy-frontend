import { useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { navigation } from "../../utils/constants";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="md:hidden z-50">
      <Hamburger
        toggled={isOpen}
        size={25}
        toggle={() => setIsOpen(!isOpen)}
        direction="right"
        duration={0.8}
      />
      {isOpen && (
        <div className="fixed left-0 shadow-2xl right-0 top-[6rem] p-6 pt-0 bg-black opacity-9 mx-6 rounded-lg">
          <ul className="">
            {navigation.map((navItem, index) => (
              <li
                key={index}
                className="w-full p-[0.08rem] text-textPrimary font-[600] border-gradient-to-r from-[#68baaf] to-[#95bbb2] hover:text-white transition-all"
              >
                <Link
                  href={navItem.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full p-5 cursor-pointer"
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
