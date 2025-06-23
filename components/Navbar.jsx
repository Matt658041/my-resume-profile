import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For Next.js 13+ app router
import navImage from "../public/github-profile.jpg";



export default function Navbar() {
  

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow fixed w-full top-0 z-50">
    <div className="flex items-center space-x-2">
      <img
        src={navImage}
        alt="MHGH Logo"
        className="w-12 h-12 object-contain mr-2"
        style={{ minWidth: "7rem", minHeight: "3rem" }}
      />
    </div>
    <div className="hidden md:flex space-x-6">
      <a
        href="#about"
        className="text-gray-700 hover:text-emerald-700 focus:underline underline-offset-4 transition-colors"
      >
        About
      </a>
      <a
        href="#skills"
        className="text-gray-700 hover:text-emerald-700 focus:underline underline-offset-4 transition-colors"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="text-gray-700 hover:text-emerald-700 focus:underline underline-offset-4 transition-colors"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-gray-700 hover:text-emerald-700 focus:underline underline-offset-4 transition-colors"
      >
        Contact
      </a>
    </div>
   
  </nav>
);

  
}
