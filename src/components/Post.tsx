'use client';

import React from 'react';
import { Button } from "@/components/ui/button"

type Post = {
  id: number;
  title: string;
  time: string;
  image: string;
  date: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Why Every Company Needs an Applicant Tracking...',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fwhat.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 2,
    title: 'How AI is Transforming the World of Recruitment',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fyuop.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 3,
    title: 'Using AI for Skill Assessment: Talent Evaluation',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F143.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 4,
    title: 'Understanding Different Types of Hiring Assessment Tests',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F456.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 5,
    title: 'The Art of Smart Hiring: Next-Generation Skills Assessment',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fbgt.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 6,
    title: 'Top 5 Recruitment Trends in 2024',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F2024.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 7,
    title: 'AI-Enhanced Candidate Screening in 2024: Revolutionizing Recruitment',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fai-enhanced-candidate.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 8,
    title: 'Top 10 Best Talent Assessment Tools for Recruiters in 2025',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F00000.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
  {
    id: 9,
    title: 'AI Tech Assessment Tools: The Ultimate Hiring Solution',
    time: "5 min read",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fscreening-2-1.jpg&w=1400&q=75',
    date: "18 Feb 2025",
  },
];

const Posts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-lg transition-all duration-300 hover:translate-y-1 transform hover:scale-101 cursor-pointer">
            <div className="bg-white rounded-lg overflow-hidden h-full ">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover "
              />
              <div className="  h-50 bg-[#DEE4E7] grid items-center justify-start text-start pl-3 pr-5 ">
                <div className="font-bold text-sm mb-2 relative top-3 left-1 ">
              <p className="bg-gradient-to-r via-pink-500 from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">
              AI
              </p>
             </div>
                
                <h2 className="text-2xl text-gray-800 font-semibold pr-2 hover:text-purple-500">
                  {post.title}
                </h2>
                <p className="text-[15px] text-gray-500 dark:text-gray-300 mt-1 flex justify-between items-center">
  <img
    src="https://www.everythingtalent.ai/_next/image?url=%2Flogos%2Facme-logo-light.png&w=32&q=75"
    alt="Author logo"
    className="w-5 h-5 rounded-full"
  />
  
  <span className="relative mr-23">
    EverythingTalent Team
  </span>

  <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-clock"
    >
      <polyline points="12 6 12 12 16 14" />
      <circle cx="12" cy="12" r="10" />
    </svg>
    {post.time}
  </span>
</p>

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
  <div className="group p-[2px] rounded-[5px] bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300">
    <Button 
      className="bg-black text-white font-bold rounded-[5px] w-36 h-11  transition-all duration-300"
      variant="outline"
    >
      Load More
    </Button>
  </div>
</div>


    </div>
  );
};

export default Posts;
