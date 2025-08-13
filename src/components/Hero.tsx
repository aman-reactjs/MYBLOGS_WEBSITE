import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="m-10 mt-40 flex flex-col lg:flex-row justify-between items-center gap-5">
        {/* Search Input */}
        <div className="navbar-start w-full lg:w-[35vw]">
          <input
            className="w-full h-10 pl-5 border border-gray-200 rounded"
            type="text"
            placeholder="Enter something..."
          />
        </div>

        {/* Category Buttons */}
        <div className="navbar-center flex flex-wrap justify-center gap-4 text-purple-400">
          <button className="border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded">All</button>
          <button className="border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded">Recruitment</button>
          <button className="border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded">Youtube</button>
          <button className="border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded">ApplicantTrackingSystem</button>
          <button className="border border-gray-200 hover:bg-gray-200 px-4 py-2 rounded">MachineLearning</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
