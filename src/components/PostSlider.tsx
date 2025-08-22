"use client";
import React from "react";
import Slider from "react-slick";

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
    image:
      "https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68=",
  },
  {
    title: "Post 3",
    description: "Data-Driven Hiring Decisions",
    info: "Leverage cutting-edge AI technology to transform your hiring workflow and find the perfect candidates faster than ever",
    image:
      "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fblog%2FHero%2Fhero3.png&w=1400&q=75",
  },
  {
    title: "Post 4",
    description: "Enhance efficiency with intelligent tracking",
    info: "Empower decisions with real-time data",
    image:
      "https://nextr.in/blog/wp-content/uploads/2023/09/Educational-Technology-1-1170x730.webp",
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
    <div className="w-full h-full mx-auto">
      <Slider {...settings}>
        {posts.map((post, index) => (
          <div key={index} className="p-2 sm:p-4">
            {/* Gradient Border Wrapper */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300">
              {/* Inner Card (light/dark) */}
                {/* Inner Card (light/dark) */}
             
              <div className="bg-gray-100 dark:dark:bg-gradient-to-r from-[#1b0058] via-[#2a006d] to-[#0a155b] rounded-2xl overflow-hidden">
                <div className="flex flex-col-reverse md:flex-row min-h-[80vh]">
                  {/* Text Section */}
                  <div className="flex-1 flex items-center justify-center bg-[linear-gradient(to_right,#ffe4e6,transparent)] dark:bg-[linear-gradient(to_right,#1f2937,transparent)] p-6 sm:p-10">
                    <div className="space-y-6 max-w-2xl text-black dark:text-white text-center md:text-left">
                      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-[10px] leading-tight">
                        {post.description}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                        {post.info}
                      </p>
                      <div className="inline-block p-[2px] group rounded-lg hover:bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400">
                 <button className="bg-black/80 shadow-lg text-white px-8 py-2 rounded-lg text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-lg ">
                   Start for Free Today
                   <span className="text-lg transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                 </button>
               
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 relative h-[40vh] md:h-auto bg-[linear-gradient(to_left,#e0f2fe,transparent)] dark:bg-[linear-gradient(to_left,#111827,transparent)] flex items-center justify-center p-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain md:object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostSlider;
 