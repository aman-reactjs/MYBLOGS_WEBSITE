"use client";
import React, { useState, useEffect } from 'react';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle body class for dark/light
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-white bg-gray-300 border border-white-300 ml-5 mt-2 shadow-sm h-14 w-[90vw] flex justify-between items-center px-4 relative z-10">
        <a className="text-2xl font-extrabold">MyBlogs</a>

      
        <ul className="hidden lg:flex gap-7 items-center font-semibold cursor-pointer">
          {['Home', 'Product', 'Solution', 'Pricing', 'Blogs', 'Support', 'About'].map(link => (
            <li
              key={link}
              className="hover:border-b-2 border-solid border-black dark:border-white transition duration-200"
            >
              <a>{link}</a>
            </li>
          ))}
        </ul>

       
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:flex text-sm px-3 py-1 border rounded-md dark:border-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex gap-2 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-2 py-1 border rounded-md dark:border-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-gray-200 dark:bg-gray-800 dark:text-white mx-5 rounded-b-md`}
      >
        <ul className="flex flex-col p-4 space-y-2 font-semibold">
          {['Home', 'Product', 'Solution', 'Pricing', 'Blogs', 'Support', 'About'].map(link => (
            <li
              key={link}
              className="hover:border-b-2 border-solid border-black dark:border-white"
            >
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar1;
