// components/BlogList.tsx

import React from 'react';
import BlogCard from '../Components/BlogCard';

// Sample data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description:
      'An in-depth look at React Hooks and how they can be used to manage state and side effects in your applications.',
    imageUrl: '/images/react-hooks.jpg',
    link: '/blog/react-hooks',
  },
  {
    id: 2,
    title: 'Next.js for Beginners',
    description:
      'A beginner-friendly guide to getting started with Next.js, a powerful React framework for production.',
    imageUrl: '/images/nextjs-beginners.jpg',
    link: '/blog/nextjs-beginners',
  },
  // Add more blog posts as needed
];

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
