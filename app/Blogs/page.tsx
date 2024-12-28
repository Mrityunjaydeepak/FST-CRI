"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import Image from "next/image";
import head from "./images/head.png";

// Blog Post Interface
interface BlogPost {
  _id: string;
  image: string;
  heading1: string;
  content1: string;
}

const Blogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch blog posts from backend
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://blog.cribonix.com/api/blogs"); // Adjust API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await response.json();

        // Extract only the fields we need: image, heading1, content1
        const filteredData: BlogPost[] = data.map((post) => ({
          _id: post._id,
          image: post.image,
          heading1: post.heading1,
          content1: post.content1,
        }));

        setBlogPosts(filteredData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-[#040404] scroll-smooth">
      <div className="container mx-auto px-6  flex flex-col">
        {/* Header Image Section */}
        <div className="relative w-full">
          <Image
            src={head}
            alt="Office Background Image"
            layout="responsive"
            width={1500}
            height={400}
            className="object-cover opacity-50"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16 z-100">
            <h2 className="text-4xl sm:text-4xl md:text-3xl lg:text-9xl font-bold text-white leading-tight">
              Blogs
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-32 flex">
          {loading ? (
            <div className="text-white text-2xl">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post._id}
                  title={post.heading1}
                  description={post.content1}
                  imageUrl={post.image}
                  link={`/Blogs/${post._id}`} // <-- Update this to include the ID
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
