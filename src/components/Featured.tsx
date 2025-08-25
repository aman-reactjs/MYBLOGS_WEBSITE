"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Post from "./Post";
import Image from "next/image";



const Featured = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <section
      className={`relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      {/* 🔳 Grid + Glow Background */}
      <div className="absolute inset-0 -z-20">
        <div
          className={`absolute inset-0 h-full w-full ${
            isDark ? "bg-gradient-to-r from-[#1b0058] via-[#2a006d] to-[#0a155b] overflow-hidden" : "bg-white"
          } bg-[linear-gradient(to_right,#88888822_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]`}
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        </div>

        <div className="absolute inset-0 pointer-events-none animate-fade-left bg-[radial-gradient(circle_at_left,rgba(240,46,170,0.2),transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none animate-fade-right bg-[radial-gradient(circle_at_right,rgba(240,46,170,0.2),transparent_70%)]" />
      </div>

      {/* 🌫️ Top + Bottom Blur & Blend */}
      <div className={`absolute top-0 left-0 w-full h-10 z-10 pointer-events-none 
  ${isDark 
    ? "bg-gradient-to-b from-[#0a155b] via-[#0a155b]/90 to-transparent" 
    : "bg-gradient-to-b from-white via-white/90 to-transparent"}
`} />

{/* Bottom Blend */}
<div className={`absolute bottom-0 left-0 w-full h-10 z-10 pointer-events-none 
  ${isDark 
    ? "bg-gradient-to-t from-[#0a155b] via-[#0a155b]/90 to-transparent" 
    : "bg-gradient-to-t from-white via-white/90 to-transparent"}
`} />
      {/* 🌟 Content */}
      <div className="w-full mt-40 relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 max-w-[1600px]">
        {/* 🎯 Icon + Label */}
        <div className="relative mb-6">
          {/* 📐 Decorative Line Image */}
          <div className="absolute -top-45 -right-40 w-[500px] h-[180px] z-10 pointer-events-none">
            <Image
  src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurve-line3.b1dd3166.png&w=768&q=75"
  alt="decorative line"
  className="w-full h-full object-contain"
  width="1000"
  height="1000"
  
/>

          </div>

          {/* 🔘 Icon */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-700 via-blue-400 to-yellow-500 flex items-center justify-center shadow-xl text-white border-[6px] border-white/70 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-audio-lines-icon lucide-audio-lines"
            >
              <path d="M2 10v3" />
              <path d="M6 6v11" />
              <path d="M10 3v18" />
              <path d="M14 8v7" />
              <path d="M18 5v13" />
              <path d="M22 10v3" />
            </svg>
          </div>

          {/* 🏷️ Label */}
          <p
            className={`text-xs sm:text-sm mt-2 px-3 py-1 rounded-lg shadow relative right-7 font-bold ${
              isDark
                ? "text-white bg-gray-700"
                : "text-purple-600 bg-gray-100"
            }`}
          >
            Featured Voices
          </p>
        </div>

        {/* 🏷️ Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 relative right-8">
          Featured{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-blue-300 to-yellow-400 text-transparent bg-clip-text">
            Blogs
          </span>
        </h2>

        {/* 📝 Subtitle */}
        <p
          className={`max-w-2xl text-sm sm:text-base md:text-lg mt-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Insights on AI hiring, machine learning in assessments, and next-gen recruitment.
        </p>

        {/* 📰 Posts */}
        <div className="mt-10 flex justify-center w-full">
          <div className="w-full max-w-[1600px] px-4">
            <Post />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
