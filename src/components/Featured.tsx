"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Post from "./Post";

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
      {/* 🔳 Grid Background with Center Fade */}
      <div
        className={`absolute inset-0 -z-20 h-full w-full bg-[size:14px_24px] 
        ${
          isDark
            ? "bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#00000022_1px,transparent_1px),linear-gradient(to_bottom,#00000022_1px,transparent_1px)]"
        } 
        [mask-image:radial-gradient(ellipse_at_center,white,transparent)]`}
      />

      {/* 🌀 Decorative Curved Line */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <svg
          viewBox="0 0 800 400"
          fill="none"
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 C300 150, 500 150, 800 0"
            stroke={isDark ? "#ffffff66" : "#00000044"}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 🌟 Main Content with Conditional Pink Background */}
      <div
        className={`z-20 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 max-w-4xl ${
          !isDark
            ? "bg-[linear-gradient(to_right,transparent,theme(colors.pink.200),transparent)]"
            : ""
        }`}
      >
        {/* Icon + Label */}
        <div className="relative mb-6 mx-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-purple-400/30 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6m3 13V6m3 13V6"
              />
            </svg>
          </div>
          <p
            className={`text-xs sm:text-sm font-medium mt-2 px-2 rounded-lg ${
              isDark
                ? "text-white bg-gradient-to-r from-[#1a093d] to-[#0f051d]"
                : "text-black bg-gradient-to-r from-[#e0d7fa] to-[#e9e2f8]"
            }`}
          >
            Featured Voices
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
          Featured{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-blue-500 to-yellow-400 text-transparent bg-clip-text">
            Blogs
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className={`max-w-2xl text-sm sm:text-base md:text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Insights on AI hiring, machine learning in assessments, and next-gen
          recruitment.
        </p>

        {/* Blog Posts */}
        <div className="mt-8 w-full">
          <Post />
        </div>
      </div>
    </section>
  );
};

export default Featured;
