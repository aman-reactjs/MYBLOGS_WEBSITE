"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"


const ReachForStars = () => {
  return (
    <div className=" flex items-center justify-center p-15">
      <section className="bg-[#04091a] w-[80vw] max-w-6xl rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-center gap-10 text-white shadow-2xl border-2 border-transparent bg-clip-padding dark:bg-white dark:text-black">
        {/* Left Image */}
        <div className="w-full md:w-[30%] flex justify-center items-center">
          <img
            src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstarcomponentimg.e64c66e5.png&w=1400&q=75"
            alt="Astronaut"
            className="w-[200px] md:w-[250px]"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-[65%] flex flex-col justify-center gap-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Reach for the{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-sky-400 to-yellow-400 text-transparent bg-clip-text">
              Stars in Talent
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed dark:text-gray-800">
            Venture into a universe of potential with AI-powered insights,
            guiding you to the software engineering candidates who will propel
            your team to new heights.
          </p>

          {/* Buttons */}
   <div className="flex gap-4 flex-wrap">
  {/* Button 1 */}
 <div className="flex gap-4 flex-wrap">
  {/* ✅ Gradient Border on Hover - Start For Free Today */}
  <div className="relative group rounded-md p-[2px] w-60 h-12">
    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <Button
      variant="default"
      className="relative z-10 bg-black text-white border-2 border-white hover:border-none w-full h-full px-6 py-3 rounded-md text-sm font-semibold shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
    >
      Start For Free Today
      <ArrowRight
        size={18}
        className="transform transition-transform duration-300 group-hover:translate-x-1"
      />
    </Button>
  </div>

  {/* ✅ Gradient Border Only on Hover - Request a Demo */}
  <div className="relative group rounded-md p-[2px] w-60 h-12">
    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <Button
      variant="default"
      className="relative z-10 bg-white text-black w-full h-full px-6 py-3 rounded-md text-sm font-semibold shadow-lg flex items-center gap-2 transition-all hover:text-white"
    >
      Request a Demo
      <ArrowRight
        size={18}
        className="transform transition-transform duration-300 group-hover:translate-x-1"
      />
    </Button>
  </div>
</div>
</div>


        </div>
      </section>
    </div>
  );
};

export default ReachForStars;
