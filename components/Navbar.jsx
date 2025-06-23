import Image from "next/image";
import Link from "next/link";
import navImage from "../public/github-profile.jpg";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-sm fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={navImage}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </Link>
          </div>
          {/* Centered nav links */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-200 hover:border-gray-400 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
