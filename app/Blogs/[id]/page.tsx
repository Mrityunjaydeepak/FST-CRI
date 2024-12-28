import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the BlogPost interface
interface BlogPost {
  _id: string;
  image: string;
  heading1: string;
  content1: string;
  heading2: string;
  content2: string;
  heading3: string;
  content3: string;
  heading4: string;
  content4: string;
  heading5: string;
  content5: string;
  // Add other fields as necessary
}

interface BlogPageProps {
  blogPost: BlogPost;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogPost }) => {
  if (!blogPost) {
    notFound(); // Automatically handle 404 if blogPost is not found
  }

  return (
    <div className="container mx-auto px-6">
      <div className=" flex relative  w-full h-72 sm:h-96 lg:h-[40rem] justify-center ">
        <Image
          src={blogPost.image}
          alt="Blog Image"
          width={1400}
          height={500}
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="mt-8 space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-start">
          {blogPost.heading1}
        </h1>
        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          {blogPost.content1}
        </h2>
        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          {blogPost.heading2}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          {blogPost.content2}
        </p>
        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          {blogPost.heading3}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          {blogPost.content3}
        </p>
        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          {blogPost.heading4}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          {blogPost.content4}
        </p>
        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          {blogPost.heading5}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          {blogPost.content5}
        </p>
        {/* Repeat for other headings/content */}
      </div>
    </div>
  );
};

// Fetch blog post data inside the component using async/await
export default async function BlogPageComponent({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    // Fetch the blog post data from your backend API
    const res = await fetch(`https://blog.cribonix.com/api/blogs/${id}`);
    const blogPost: BlogPost = await res.json();

    if (!blogPost) {
      notFound(); // Automatically handle 404 if blogPost is not found
    }

    return <BlogPage blogPost={blogPost} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound(); // Automatically handle 404 if there is an error
  }
}
