"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Sun, Moon, Menu } from "lucide-react";

const Navbar1 = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <nav className="w-full bg-transparent py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* TOP: Main Nav Container */}
        <div className="flex items-center justify-between w-[45vw] bg-[#ebedf0] dark:bg-[#0e1218] px-4 md:px-6 py-3 rounded-xl shadow border border-gray-400 dark:border-gray-700 border-2">
          {/* Left: Logo + Links */}
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
              {["Home", "Products", "Solutions", "Pricing", "Blog", "Support", "About"].map((link) => (
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

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Buttons (hidden on mobile) */}
        <div className="hidden sm:flex justify-end items-center gap-2 w-full md:w-auto">
          <button className="flex items-center text-sm px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow transition bg-white dark:bg-gray-800 text-gray-700 dark:text-white">
            Request a Demo <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          {/* Dark Mode Toggle – Hidden on small screens */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 border rounded-xl hover:shadow-sm transition dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="flex items-center text-sm px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow transition bg-white dark:bg-gray-800 text-gray-700 dark:text-white">
            Login <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-3 bg-[#f2f5fb] dark:bg-[#1f2937] p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-white shadow">
            {["Home", "Products", "Solutions", "Pricing", "Blog", "Support", "About"].map((link) => (
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
              {/* Dark mode toggle inside mobile menu */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-full border px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-center hover:bg-white dark:hover:bg-gray-700 dark:border-gray-600"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>

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