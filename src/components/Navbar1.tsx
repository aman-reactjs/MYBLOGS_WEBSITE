"use client";
import React, { useState } from "react";
import { ArrowRight, Sun, Moon, Laptop, Menu } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar1 = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Products", "Solutions", "Pricing", "Blog", "Support", "About"];

  return (
    <nav className="w-full bg-transparent py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center justify-between w-full md:w-[45vw] bg-[#ebedf0] dark:bg-[#0e1218] px-4 md:px-6 py-3 rounded-xl shadow border border-gray-400 dark:border-gray-700 border-2">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="pr-4 border-r border-gray-300 dark:border-gray-600">
              <img
                src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=48&q=75"
                alt="Logo"
                className="h-6 w-auto"
              />
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700 dark:text-white">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className={`hover:text-purple-500 transition ${
                    link === "Blog" ? "text-fuchsia-600 font-semibold" : ""
                  }`}
                >
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Right Side Buttons (Desktop Only) */}
        <div className="hidden sm:flex justify-end items-center gap-2 w-full md:w-auto">
          <button className="flex items-center text-sm px-4 py-2 rounded-xs border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow transition bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:border-2 hover:border-pink-400">
            Request a Demo <ArrowRight className="w-4 h-7 ml-1" />
          </button>

          {/* Theme Toggle Dropdown */}
          <div className="relative group">
            <button className="p-2 border rounded-xs hover:shadow-sm transition dark:border-gray-600\ bg-white dark:bg-gray-800 text-gray-700 dark:text-white">
              {theme === "light" ? (
                <Sun className="w-10 h-7" />
              ) : theme === "dark" ? (
                <Moon className="w-10 h-7" />
              ) : (
                <Laptop className="w-10 h-7" />
              )}
            </button>

            <div className="absolute right-0  hidden group-hover:flex flex-col border rounded-lg shadow bg-white dark:bg-gray-800 text-sm w-32 z-10 overflow-hidden ">
              <button
                onClick={() => setTheme("light")}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-left  border-gray-200 mb-2 hover:border-2 hover:border-pink-400"
              >
                ☼ Light
              </button>
              <button
                onClick={() => setTheme("dark")}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-left  border-gray-200 mb-2 hover:border-2 hover:border-pink-400"
              >
                ☽ Dark
              </button>
              <button
                onClick={() => setTheme("system")}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-left  border-gray-200 mb-2 hover:border-2 hover:border-pink-400"
              >
                🖥️ System
              </button>
            </div>
          </div>

          <button className="flex items-center text-sm px-4 py-2 rounded-xs border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow transition bg-white dark:bg-gray-800 text-gray-700 dark:text-white n hover:border-2 hover:border-pink-400">
            Login <ArrowRight className="w-4 h-7 ml-1 " />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-3 bg-[#f2f5fb] dark:bg-[#1f2937] p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-white shadow">
            {navLinks.map((link) => (
              <li
                key={link}
                className={`hover:text-purple-500 transition ${
                  link === "Blog" ? "text-fuchsia-600 font-semibold" : ""
                }`}
              >
                <a href="#">{link}</a>
              </li>
            ))}

            <div className="flex flex-col gap-2 pt-4">
              {/* Theme Toggle Buttons */}
              <button
                onClick={() => setTheme("light")}
                className="w-full border px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-center hover:bg-white dark:hover:bg-gray-700 dark:border-gray-600"
              >
                <Sun className="w-5 h-5" /> Light
              </button>
              <button
                onClick={() => setTheme("dark")}
                className="w-full border px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-center hover:bg-white dark:hover:bg-gray-700 dark:border-gray-600"
              >
                <Moon className="w-5 h-5" /> Dark
              </button>
              <button
                onClick={() => setTheme("system")}
                className="w-full border px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-center hover:bg-white dark:hover:bg-gray-700 dark:border-gray-600"
              >
                <Laptop className="w-5 h-5" /> System
              </button>

              {/* Actions */}
              <button className="w-full border px-4 py-2 rounded-xl text-center hover:bg-white dark:hover:bg-gray-700 dark:border-gray-600">
                Request a Demo
              </button>
              <button className="w-full border px-4 py-2 rounded-xl text-center hover:bg-white dark:hover:bg-gray-700 dark:border-gray-600">
                Login
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
