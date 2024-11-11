import Link from "next/link";
import React from "react";
import LogoIcon from "../icons/logo-icon";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0E5A61] pt-10 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-5 ">
          {/* logo */}
          <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 lg:justify-between">
            <Link href={"/"}>
              <div className="flex lg:justify-start ">
                <LogoIcon />
              </div>
            </Link>
            <div className="lg:text-left">
              <p className="text-sm mb-2">Terms & Conditions</p>
              <p className="text-sm text-white text-opacity-40">
                Privacy policy
              </p>
            </div>
            <div className="lg:text-left">
              <p className="text-sm">
                © 2024 HealthPaddy <br /> all rights reserved
              </p>
            </div>
          </div>

          <div className="flex justify-start border-t border-white border-opacity-30">
            <ul className="flex space-x-4 text-white pt-5">
              <li>
                <Link href="https://x.com/Healthpaddyng">
                  <FaXTwitter color="white" size={24} />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61560819501680">
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/healthpaddyng?igsh=MTV6Nmx3YzNna3Vpcg%3D%3D&utm_source=qr">
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
