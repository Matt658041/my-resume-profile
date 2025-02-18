import React from "react";
import Image from "next/image";
import Link from "next/link";
import navImage from "../public/github-profile.jpg"; // Replace with your nav image path

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white/70 backdrop-blur ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center space-x-4 p-5">
          <Link href="/">
            <Image
              className="rounded-lg"
              src={navImage}
              alt="/"
              width="70"
              height="80"
            />
          </Link>
          <p className="text-lg">Let's build something legendary together</p>
        </div>
        <div>
          <ul className="flex space-x-2 pr-20">
            <li className="text-lg uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="text-lg uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="text-lg uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="text-lg uppercase hover:border-b pr-20">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
