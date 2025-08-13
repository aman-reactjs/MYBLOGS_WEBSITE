"use client";
import React from "react";

const Featured = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:30px_30px] z-0 pointer-events-none" />

      {/* Curved Line */}
      <div className="absolute w-full h-full z-10">
        <svg
          className="absolute top-0 right-0 w-1/2 h-1/2"
          fill="none"
          viewBox="0 0 300 300"
        >
          <path
            d="M300 0 C150 200, 150 200, 0 300"
            stroke="#8884"
            strokeWidth="1"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="z-20 flex flex-col items-center text-center px-4">
        {/* Glowing Circle Icon */}
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-purple-400/30 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          <p className="text-xs font-medium text-purple-600 mt-2 bg-white dark:bg-[#0a0a0a] px-2 rounded-lg">
            Featured Voices
          </p>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-2">
          Featured{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-blue-500 to-yellow-400 text-transparent bg-clip-text">
            Blogs
          </span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
          Insights on AI hiring, machine learning in assessments, and next-gen
          recruitment.
        </p>
      </div>
    </section>
  );
};

export default Featured;
