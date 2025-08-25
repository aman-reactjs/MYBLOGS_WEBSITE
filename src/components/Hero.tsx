import React from 'react';
import { Search } from "lucide-react"; // Using lucide icon

const Hero = () => {
  return (
    <div className="min-h-[25vh] flex justify-center items-center px-4">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Search Input */}
        <div className="w-full lg:w-[35vw] relative">
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={20} />
          <input
            className="w-full h-10 pl-20 pr-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            placeholder="Search blog posts..."
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 text-[#D03DF8] mt-4 lg:mt-0">
          {['All', 'Recruitment', 'Youtube', 'ApplicantTrackingSystem', 'MachineLearning'].map((item, index) => (
            <button
              key={index}
              className="border border-gray-300 hover:bg-gray-200 hover:text-black px-6 py-2 rounded transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
