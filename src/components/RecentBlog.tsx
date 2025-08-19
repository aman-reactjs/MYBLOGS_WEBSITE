"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

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
  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300">
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4 w-full bg-gray-100 dark:bg-gray-800 h-40 grid items-end">
      <h5 className="font-bold text-[18px] text-start text-gray-800 dark:text-white hover:text-purple-600 transition-colors duration-300">
        {blog.title}
      </h5>
      <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 flex justify-between items-center">
        <img
          src="https://www.everythingtalent.ai/_next/image?url=%2Flogos%2Facme-logo-light.png&w=32&q=75"
          alt="Author logo"
        />
        <span className="relative right-10">EverythingTalent Team</span>
        <span className="text-gray-700 dark:text-gray-300">{blog.readTime}</span>
      </p>
      <p className="text-xs text-gray-700 dark:text-gray-400 mt-1 flex justify-between">{blog.date}</p>
    </div>
  </div>
);

const NewsletterBox: React.FC = () => (
  <div className="relative rounded-xl p-6 text-center max-w-2xl mx-auto mt-12 bg-white dark:bg-gray-900 shadow-md overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-300 via-purple-100 to-transparent rounded-full opacity-40 blur-3xl"></div>
    <h2 className="font-semibold text-lg z-10 relative text-gray-800 dark:text-white">
      Receive the latest Newsletter <span className="text-purple-600">updates</span>.
    </h2>
    <div className="flex items-center justify-center gap-2 relative z-10 w-full sm:w-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white w-full sm:w-64"
      />
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
        Subscribe
      </button>
    </div>
  </div>
);

const CTABox: React.FC = () => (
  <div className="bg-gradient-to-br from-[#050505] to-[#1e1e1e] text-white rounded-xl p-6 mt-12 w-full max-w-4xl mx-auto text-center shadow-lg">
    <p className="text-xl font-bold">
      Reach for the <span className="text-purple-400">Stars</span> in{" "}
      <span className="text-green-400">Talent</span>
    </p>
    <p className="text-sm mt-2 max-w-xl mx-auto">
      Navigate success with AI-powered insights, guiding you to the perfect hiring decision every time.
    </p>
    <div className="mt-4 flex justify-center gap-4 flex-wrap">
      <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
        Read the blog
      </button>
      <button className="border border-white px-4 py-2 rounded-md text-sm font-medium">
        Request a demo
      </button>
    </div>
  </div>
);

const RecentBlog: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 h-full w-full z-0">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="mb-10 relative z-10 flex flex-col items-center justify-center">
        <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-purple-400 to-purple-500"></div>
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-yellow-400 flex items-center justify-center shadow-xl">
          <div className="w-6 h-6 rounded-full bg-white shadow-md"></div>
        </div>
        <span className="mt-2 px-3 py-1 text-xs font-semibold text-purple-700 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full shadow-md">
          Fresh Perspectives
        </span>
        <h2 className="text-3xl font-bold text-center mt-4 text-gray-900 dark:text-white">
          Recent <span className="text-purple-600">Bl</span>
          <span className="text-blue-400">o</span>
          <span className="text-pink-200">g</span>
          <span className="text-gray-800 dark:text-gray-300">s</span>
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

      <div className="flex flex-wrap justify-center gap-6 mt-12 relative z-10">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>

      <NewsletterBox />
      <CTABox />
    </section>
  );
};

export default RecentBlog;
