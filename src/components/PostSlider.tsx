"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const posts = [
  {
    title: "Post 1",
    description: "Streamline Hiring with AI-Powered Applicant Tracking",
    info: "Enhance recruitment efficiency, spot top talent faster, and make smarter hiring decisions with AI-driven applicant tracking solutions.",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fblog%2FHero%2Fhero1.png&w=1400&q=75",
  },
  {
    title: "Post 2",
    description: "Revolutionize Your Recruitment Process",
    info: "Utilize advanced analytics and AI insights to make informed decisions and build high-performing teams",
    image: "", // fallback background
  },
  {
    title: "Post 3",
    description: "Data-Driven Hiring Decisions",
    info: "Leverage cutting-edge AI technology to transform your hiring workflow and find the perfect candidates faster than ever",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fblog%2FHero%2Fhero3.png&w=1400&q=75",
  },
];

const PostSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full h-full mx-auto max-w-7xl">
      <Slider {...settings}>
        {posts.map((post, index) => {
          const noImage = !post.image?.trim();

          return (
            <div key={index} className="p-4">
              <div
                className={`relative flex flex-col lg:flex-row min-h-[33rem] rounded-2xl transition-all duration-300 ${
                  noImage
                    ? ""
                    : "bg-gradient-to-r via-pink-500 from-purple-500 to-yellow-600 p-[2px]"
                }`}
              >
                {/* Inner Card */}
                <div className="bg-gray-100 dark:bg-gradient-to-r from-[#24013D] via-[#3B0D65] to-[#011E4C] rounded-2xl overflow-hidden w-full">
                  <div
                    className={`flex flex-col lg:flex-row h-full ${
                      noImage
                        ? "bg-[url('https://www.bluefin.com/wp-content/uploads/2020/08/ai-future.jpg')] bg-cover bg-center"
                        : ""
                    }`}
                  >
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center bg-[linear-gradient(to_right,#ffe4e6,transparent)] dark:bg-[linear-gradient(to_right,#1f2937,transparent)] p-6 sm:p-10">
                      <div
                        className={`space-y-6 text-center lg:text-left ${
                          noImage ? "text-white" : "text-black dark:text-white"
                        }`}
                      >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                          {post.description}
                        </h2>
                        <p
                          className={`text-base sm:text-lg ${
                            noImage
                              ? "text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {post.info}
                        </p>
                        <div className="inline-block p-[2px] group rounded-lg hover:bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400">
                          <button className="bg-black text-white px-8 py-2 rounded-lg text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2">
                            Start for Free Today
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    {!noImage && (
                      <div className="w-full lg:w-1/2 relative h-64 top-22 sm:h-80 md:h-[28rem] flex items-center justify-center p-2">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PostSlider;
