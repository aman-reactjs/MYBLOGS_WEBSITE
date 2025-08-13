"use client";
import React from "react";
import Slider from "react-slick";

const posts = [
  {
    title: "Post 1",
    description: "Streamline Hiring with AI-Powered Applicant Tracking",
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
    image: "https://www.algoface.ai/wp-content/uploads/2022/03/Human-centered-tech.jpg"
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
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4">
      <Slider {...settings}>
        {posts.map((post, index) => (
          <div key={index}>
            <div className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-xl">
              {/* Background Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              {/* Text Content */}
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-start px-6 md:px-20 z-20">
                <div className="max-w-2xl text-left space-y-6">
                  <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                    <span className="text-white px-1">{
                      post.description.split(" ")[0]
                    }</span>{" "}
                    {post.description.split(" ").slice(1).join(" ")}
                  </h1>
                  <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-medium">
                    {post.info}
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2">
                    Start for Free Today <span className="text-lg">→</span>
                  </button>
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
