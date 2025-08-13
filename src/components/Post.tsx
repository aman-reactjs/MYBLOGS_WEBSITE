'use client';

import React from 'react';

type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Why Every Company Needs an Applicant Tracking System (ATS) ?',
    description: "AI isn’t the future. You are.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fwhat.jpg&w=1400&q=75',
  },
  {
    id: 2,
    title: 'How AI is Transforming the World of Recruitment',
    description: "Unlock AI potential today."
,
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fyuop.jpg&w=1400&q=75',
  },
  {
    id: 3,
    title: 'Using AI for Skill Assessment: Talent Evaluation',
    description: "Start your AI journey now.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F143.jpg&w=1400&q=75',
  },
  {
    id: 4,
    title: 'Understanding Different Types of Hiring Assessment Tests',
    description: "Learn AI, lead tomorrow.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F456.jpg&w=1400&q=75',
  },
  {
    id: 5,
    title: 'The Art of Smart Hiring: Next-Generation Skills Assessment',
    description: "AI skills, future ready.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fbgt.jpg&w=1400&q=75',
  },
  {
    id: 6,
    title: 'Top 5 Recruitment Trends in 2024',
    description: "Master minds learn AI.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F2024.jpg&w=1400&q=75',
  },
  {
    id: 7,
    title: 'AI-Enhanced Candidate Screening in 2024: Revolutionizing Recruitment',
    description: "Code smarter with AI.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fai-enhanced-candidate.jpg&w=1400&q=75',
  },
  {
    id: 8,
    title: 'Top 10 Best Talent Assessment Tools for Recruiters in 2025',
    description:"AI: Learn. Innovate. Dominate.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F00000.jpg&w=1400&q=75',
  },
  {
    id: 9,
    title: 'AI Tech Assessment Tools: The Ultimate Hiring Solution',
    description: "Step into the AI era.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2Fscreening-2-1.jpg&w=1400&q=75',
  },
  {
    id: 10,
    title: 'The Importance of AI in Modern Recruitment',
    description: "Empower your future with AI.",
    image: 'https://www.everythingtalent.ai/_next/image?url=https%3A%2F%2Fsdmzyaxpsheauojrtsvy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fadmin-blog%2F20943991.jpg&w=1400&q=75',
  },
];

const Posts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
               