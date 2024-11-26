// components/BlogCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the props interface
interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = 'Blog Image',
  link,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={link}>
        <a>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Read More
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
