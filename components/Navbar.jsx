import React from "react";
import Image from "next/image";
import Link from "next/link";
import navImage from "../public/github-profile.jpg"; // Replace with your nav image path

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white/70 ">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="flex items-center space-x-4 py-5">
          <Link href="/"></Link>
          <p className="text-lg ml-4">Let's build something together</p>
        </div>

        <ul className="hidden md:flex space-x-5">
          <Link href="/#about">
            <li className=" mt-2 ml-10 text-lg uppercase hover:border-b">About</li>
          </Link>

          <Link href="/#skills">
            <li className=" ml-10 text-lg uppercase hover:border-b">Skills</li>
          </Link>

          <Link href="/#projects">
            <li className=" ml-10 text-lg uppercase hover:border-b">
              Projects
            </li>
          </Link>

          <Link href="/#contact">
            <li className=" ml-10 text-lg uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
