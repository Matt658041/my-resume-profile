"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
    <Disclosure as="nav" className="bg-gray-900 shadow-sm fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between items-center">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Centered nav items */}
              <div className="flex-1 flex justify-center sm:justify-center items-center">
                <div className="hidden sm:flex space-x-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-200 hover:text-gray-400 transition font-medium text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Profile image on the right */}
              <div className="absolute right-0 flex items-center">
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

          {/* Mobile menu panel */}
          <DisclosurePanel className="sm:hidden bg-gray-900 px-4 pb-4 pt-2 space-y-1">
            {navItems.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className="block text-gray-200 hover:text-gray-400 transition font-medium text-base"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
