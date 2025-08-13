// components/PostSlider.tsx
"use client";
import { info } from "console";
import React from "react";

import Slider from "react-slick";

const posts = [
  {
    title: "Post 1",
    description: "Streamline Hiring with AI-Powered Applicant Tracking"
,
info: "Enhance recruitment efficiency, spot top talent faster, and make smarter hiring decisions with AI-driven applicant tracking solutions.",
    image: "https://www.algoface.ai/wp-content/uploads/2022/03/Human-centered-tech.jpg"
  },
  {
    title: "Post 2",
    description: "Revolutionize Your Recruitment Process",
    info: "Utilize advanced analytics and AI insights to make informed decisions and build high-performing teams",
    image: "https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68="
  },
  {
    title: "Post 3",
    description: "Data-Driven Hiring Decisions",
    info: "Leverage cutting-edge AI technology to transform your hiring workflow and find the perfect candidates faster than ever",
    image: "https://www.algoface.ai/wp-content/uploads/2022/03/Human-centered-tech.jpg "
  },
  {
    title: "Post 4",
    description: "Enhance efficiency with intelligent tracking",
    info: "Empower decisions with real-time data",
    image: "https://nextr.in/blog/wp-content/uploads/2023/09/Educational-Technology-1-1170x730.webp"
  },
];

const PostSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Slider {...settings}>
        {posts.map((post, index) => (
          <div key={index} className="p-1">
            <div className="h-[80vh] w-[90vw]bg-red-4\00 rounded-lg shadow-lg overflow-hidden relative">
              <img src={post.image} alt={post.title} className="w-full h-[80vh] w-[90vw] object-cover border-2 border-pink-500" />
                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
            <h1 className="font-bold text-[#F5E050] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              {post.description}
            </h1>
            <p className="text-teal-500 font-bold text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              {post.info}
            </p>

     </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostSlider;
