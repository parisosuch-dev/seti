"use client";

import { Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, Fragment, useRef, useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.changedTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndY.current = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartY.current - touchEndY.current > 50) {
      setIsOpen(false); // Close menu on swipe up
    }
  };

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  }, [isOpen]);

  return (
    <div className="bg-obsidian fixed top-0 left-0 z-10 w-full">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex w-full items-center justify-between h-16">
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
            <div className="flex items-baseline space-x-12">
              {navLinks.map((link) => (
                <Link
                  className="text-white font-poppins font-medium hover:underline"
                  href={link.url}
                  key={link.url}
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
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-375 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="md:hidden"
          id="mobile-menu"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col pt-8 items-center min-h-screen space-y-4 bg-obsidian">
            {navLinks.map((link) => (
              <Link
                className="text-white text-2xl font-poppins font-medium"
                href={link.url}
                key={link.url}
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
