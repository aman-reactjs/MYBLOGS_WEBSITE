"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";




interface Blog {
  title: string;
  date: string;
  readTime: string;
  image: string;
}

const blogs: Blog[] = [
  {
    title: "The Importance of AI in Modern Recruitment",
    date: "28 May, 2024",
    readTime: "3 min read",
    image:
      "https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F20943991.jpg&w=1400&q=75",
  },
  {
    title: "AI Tech Assessment Tools: The Ultimate Hiring Solution",
    date: "28 May, 2024",
    readTime: "4 min read",
    image:
      "https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fscreening-2-1.jpg&w=1400&q=75",
  },
  {
    title: "Top 10 Best Talent Assessment Tools for 2024",
    date: "28 May, 2024",
    readTime: "5 min read",
    image:
      "https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F00000.jpg&w=1400&q=75",
  },
];

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 w-full max-w-xs hover:shadow-lg transition-shadow duration-300">
    <div className="group bg-[#DEE4E7] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden w-full">
      <Image src={blog.image} alt={blog.title} className="w-full h-48 object-cover"  width="1000"
  height="1000" />
      <div className="p-4 w-full dark:bg-gray-800 h-50 grid items-end">
        <div className="font-bold text-sm mb-2">
          <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-50 bg-clip-text text-transparent font-bold relative right-33">
            AI
          </p>
        </div>

        <h5 className="font-bold text-[18px] text-start text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors duration-300">
          {blog.title}
        </h5>

        <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 flex justify-between items-center">
          <Image
            className="mt-3 mr-2 w-5 h-5"  width="48"
  height="48"
            src="https://www.everythingtalent.ai/_next/image?url=%2Flogos%2Facme-logo-light.png&w=32&q=75"
            alt="Author logo"
          />
          <span className="relative right-10 top-2">EverythingTalent Team</span>
          <span className="text-gray-700 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock h-4 w-4 relative top-4 right-6"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {blog.readTime}
          </span>
        </p>

        <p className="text-xs text-gray-700 dark:text-gray-400 mt-2 flex justify-between">{blog.date}</p>
      </div>
    </div>
  </div>
);


const NewsletterBox: React.FC = () => (
  <div className="relative rounded-[5px] p-6 text-start mx-auto mt-12 bg-[#DEE4E7] dark:bg-gray-900 shadow-md overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 w-5xl h-40">
    
    <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-300 via-purple-100 to-transparent rounded-full opacity-40 blur-3xl"></div>
    <Image className="relative top-15 right-8 opacity-70 size-13" src="/newsLetterImage.png" alt=""  width="1000"
  height="1000" />
    <h2 className="font-bold text-4xl z-10 relative text-gray-800 dark:text-white">
      Receive the latest Newsletter <span className="text-purple-600">updates.</span>
    </h2>
    <div className="flex items-center justify-center gap-2 relative z-10 w-full sm:w-auto">
       <Image className="relative top-10 right-15 size-10 opacity-40" src="/newsLetterImage.png" alt=""  width="1000"
  height="1000"/>
    <div className="relative w-full sm:w-94">
      <Image className="relative bottom-6 size-13 left-90 opacity-35" src="/newsLetterImage.png"alt=""  width="1000"
  height="1000"/>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
  >
    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
  </svg>

  <Input
    type="email"
    placeholder="Enter your email"
    className="pl-14 pr-4 py-2 rounded-[7px] border-none bg-white dark:bg-gray-800 text-black dark:text-white w-full text-[17px]"
  />
  <Image className="relative right-100 bottom-25 opacity-70 size-13" src="/newsLetterImage.png" alt=""  width="1000"
  height="1000"/>
</div>


      
   <Button variant="secondary" className="px-6 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">Subscribe</Button>
    </div>
  </div>
);



const RecentBlog: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden bg-white dark:bg-[#04091a]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 h-full w-full z-0">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] dark:bg-[radial-gradient(#1f1f1f_1px,transparent_5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Fading pink glows from left and right */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,192,203,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,192,203,0.25),transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="mb-10 relative z-10 flex flex-col items-center justify-center">
        <div className=" w-[1px] h-35 bg-gradient-to-b from-transparent via-purple-400 to-purple-500"></div>
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-700 via-blue-400 to-yellow-400 flex items-center justify-center shadow-xl text-black border-6 border-white/80">
          {/* ✅ Replaced icon here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-rss-icon h-6 w-6 ${isDark ? "text-white" : "text-black"}`}
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
        </div>
        <span className="mt-2 px-3 py-1 font-bold text-purple-400 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full shadow-md">
          Fresh Perspectives
        </span>
          <h2 className="text-2xl ml-20 sm:text-3xl md:text-4xl font-extrabold mb-2 relative right-8">
          Recent{' '}
          <span className="bg-gradient-to-r from-fuchsia-500 via-blue-500 to-yellow-400 text-transparent bg-clip-text">
            Blogs
          </span>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
          Navigate the future of hiring with expert insights and proven strategies.
        </p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4 pr-4">
          <button className="border border-purple-500 text-purple-500 rounded-full p-2 hover:bg-purple-50 dark:hover:bg-gray-700">
            <ArrowLeft size={16} />
          </button>
          <button className="border border-pink-500 text-pink-500 rounded-full p-2 hover:bg-pink-50 dark:hover:bg-gray-700">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 relative z-10">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>

      {/* Newsletter & CTA */}
      <NewsletterBox />
      {/* <CTABox /> */}
     
    </section>
  );
};

export default RecentBlog;
