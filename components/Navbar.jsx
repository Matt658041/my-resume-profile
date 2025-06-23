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
    <nav className="bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Top Right Rounded Image */}
          <div className="flex-shrink-0">
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
        </div>
      </div>
    </nav>
  );
}
