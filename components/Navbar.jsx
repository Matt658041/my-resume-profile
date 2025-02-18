import React from "react";
import Image from "next/image";
import Link from "next/link";
import navImage from "../public/github-profile.jpg"; // Replace with your nav image path

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white/70 backdrop-blur">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="flex items-center space-x-4 py-5">
          <Link href="/">
            <Image
              className="rounded-lg"
              src={navImage}
              alt="/"
              width="70"
              height="80"
            />
          </Link>
          <p className="text-lg ml-4">
            Let's build something together
          </p>
        </div>
        <div>
          <ul className="flex space-x-8 pr-10">
            <li className="text-lg uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="text-lg uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="text-lg uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="text-lg uppercase hover:border-b pr-10">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
