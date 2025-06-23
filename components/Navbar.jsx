import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For Next.js 13+ app router
import navImage from "../public/github-profile.jpg";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 shadow-sm fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={navImage}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </Link>
          </div>
          {/* Centered nav links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-8">
            {navItems.map((item) => {
              // For hash links, you may want to use a different active logic
              const isActive =
                typeof window !== "undefined" &&
                window.location.hash === item.href.replace("/", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-base font-medium transition-colors
                    ${
                      isActive
                        ? "border-b-2 border-emerald-600 text-emerald-700 bg-emerald-50 bg-opacity-50"
                        : "border-b-2 border-transparent text-gray-700 hover:border-emerald-400 hover:text-emerald-700"
                    }
                  `}
                  style={{ borderBottomOpacity: 0.5 }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
