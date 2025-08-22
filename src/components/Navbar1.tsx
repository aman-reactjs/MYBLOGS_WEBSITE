"use client";
import React, { useState } from "react";
import { ArrowRight, Sun, Moon, Laptop, Menu } from "lucide-react";
import { ChevronRight } from 'lucide-react'
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"


const Navbar1 = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Products", "Solutions", "Pricing", "Blog", "Support", "About"];

  return (
    <nav className="w-full bg-transparent py-1 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center justify-between w-full md:w-[600px] bg-[#ebedf0] dark:bg-[#0e1218] px-4 md:px-6 py-1 rounded-[12px] shadow border-gray-400 dark:border-gray-700 border-2">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="pr-4 border-r border-gray-300 dark:border-gray-600">
              <img
                src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=48&q=75"
                alt="Logo"
                className="h-9 w-auto"
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
          <div className="hidden sm:flex justify-end items-start gap-4 w-full md:w-auto">
      <div className="group p-[1px] rounded-md transition-all duration-300 bg-white/10 backdrop-blur-md border-1 border-white/10 shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 ">
        <Button
          variant="default"
          className="w-full md:w-auto bg-white dark:bg-black text-gray-700 dark:text-white font-bold text-sm px-4 py-5 rounded-md shadow-lg group-hover:shadow dark:hover:bg-black transition-all duration-300 border-t-2 backdrop-blur-sm backdrop-filter fill-transparent"
        >
          Request a Demo
          <ChevronRight className="w-7 h-10 relative top-0.5 size-0.5" />
        </Button>
      </div>
         
          {/* Theme Toggle Dropdown */}
          <ul>
            <div className="relative group top-0.5">
          <div className="p-[1px] rounded-md  bg-gray-300 shadow-lg transform  hover:shadow-md transition">
            <Button
              variant="outline"
              className="w-14 h-11 font-bold bg-white dark:bg-gray-800 text-gray-500 dark:text-white rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-black relative "
            >
              {theme === "light" ? (
                <Sun className="w-5 h-5 " />
              ) : theme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Laptop className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 hidden group-hover:flex flex-col border rounded-lg shadow bg-white dark:bg-gray-800 text-sm w-32 z-10 overflow-hidden">
           <div className="space-y-2">
  <div className="group bg-transparent p-[2px] rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300">
    <button
      onClick={() => setTheme("light")}
      className="w-full px-4 py-2 bg-white dark:bg-black text-left rounded-lg group-hover:bg-white group-hover:dark:bg-black transition-all duration-300 "
    >
      ☼ Light
    </button>
  </div>

  <div className="group bg-transparent p-[2px] rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300">
    <button
      onClick={() => setTheme("dark")}
      className="w-full px-4 py-2 bg-white dark:bg-black text-left rounded-lg group-hover:bg-white group-hover:dark:bg-black transition-all duration-300"
    >
      ☾ Dark
    </button>
  </div>

  <div className="group bg-transparent p-[2px] rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300">
    <button
      onClick={() => setTheme("system")}
      className="w-full px-4 py-2 bg-white dark:bg-black text-left rounded-lg group-hover:bg-white group-hover:dark:bg-black transition-all duration-300"
    >
      🖥️ System
    </button>
  </div>
</div>

          </div>
        </div>
      </ul>
            
      <div className="group p-[1px] rounded-md transition-all duration-300 bg-white/10 backdrop-blur-md border-1 border-white/10 shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 ">
        <Button
          variant="default"
          className="w-full md:w-auto bg-white dark:bg-white text-gray-700 dark:text-black font-bold text-sm px-4 py-5 rounded-md shadow-lg group-hover:shadow  transition-all duration-300 border-t-2 backdrop-blur-sm backdrop-filter fill-transparent"
        >
        Login
         <ArrowRight
      className="w-4 h-4 ml-2 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
    />
        </Button>
      </div>
         
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
