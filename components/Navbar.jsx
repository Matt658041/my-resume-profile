import React from "react";
import Image from "next/image";
import Link from "next/link";
import navImage from "../public/github-profile.jpg"; // Replace with your nav image path

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white/70">
      <div className="relative flex items-center w-full h-full px-4 2xl:px-16">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="rounded-lg"
              src={navImage}
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
        {/* Centered nav links */}
        <ul className="hidden md:flex space-x-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li className="text-lg uppercase hover:border-b">
            <Link href="/#about">About</Link>
          </li>
          <li className="text-lg uppercase hover:border-b">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="text-lg uppercase hover:border-b">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="text-lg uppercase hover:border-b">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
