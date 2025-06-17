"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How it works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/feature" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navLinks = (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`relative px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
            isActive(item.path) ? "text-blue-600 font-semibold" : "font-medium"
          }`}
        >
          {item.name}
          {isActive(item.path) && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-3px] w-2 h-2 bg-blue-600 rounded-full hidden md:block"></span>
          )}
        </Link>
      ))}
    </>
  );

  const authButtons = (
    <>
      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition text-sm">
        Get Started
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm">
        Sign In
      </button>
    </>
  );

  return (
    <header
      className={`bg-white sticky top-0 z-50 w-full transition-[border,box-shadow] duration-300 ${
        scrolled ? "border-b border-gray-300 shadow-md" : "border-b-0 shadow-none"
      }`}
      style={{ height: "87px" }}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[240px] flex justify-between items-center h-full py-4">
        <h1 className="text-lg font-bold w-[115px] h-[55px]">
          <img
            src="/lungtaHeader.png"
            alt="Lungta logo"
            className="h-auto max-h-[55px]"
          />
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-sm md:text-base space-x-3 ml-2 whitespace-nowrap">
          {navLinks}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-3 text-sm">{authButtons}</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          onClick={toggleMobileMenu}
          aria-label="Close mobile menu"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col space-y-6 text-xl font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-gray-700 hover:text-blue-600 py-2 text-center transition-colors duration-200 ${
                isActive(item.path) ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="block mt-2 mx-auto w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col space-y-4 mt-8 text-lg w-full px-8 max-w-sm">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition w-full">
            Get Started
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
