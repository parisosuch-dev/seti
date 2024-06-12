"use client";

import { Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, Fragment } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  interface navLink {
    text: string;
    url: string;
  }

  const navLinks: navLink[] = [
    { text: "News", url: "/news" },
    { text: "Events", url: "/events" },
    { text: "Scientists", url: "/scientists" },
    { text: "Research", url: "/research" },
    { text: "Outreach", url: "/outreach" },
    { text: "Education", url: "/education" },
    { text: "About", url: "/about" },
  ];

  return (
    <div className="bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              className="text-white text-2xl font-poppins font-bold"
              href="/"
            >
              SETI INSTITUTE.
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-obsidian inline-flex items-center justify-center p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon
                  className="block h-6 w-6"
                  color="white"
                  aria-hidden="true"
                />
              ) : (
                <Bars2Icon
                  className="block h-6 w-6"
                  color="white"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  className="text-white font-poppins font-medium hover:underline"
                  href={link.url}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="flex flex-col pt-8 items-center min-h-screen space-y-4">
            {navLinks.map((link) => (
              <Link
                className="text-white text-2xl font-poppins font-medium"
                href={link.url}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}
