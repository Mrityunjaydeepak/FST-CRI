// components/Card.tsx
import React from 'react';
import Image from 'next/image';


interface CardProps {
  height?: string;         // Tailwind CSS height classes, e.g., "h-64"
  width?: string;  
  heading?: string;        // Tailwind CSS width classes, e.g., "w-80"
  tagline?: string;        // Optional tagline or subtitle
  number: string;          // Number to display (e.g., "50Cr+")
  subheading?: string;     // Optional subheading or subtitle
  description: string;     // Description or detailed content of the card
  image?: string;          // Optional image URL or path
  onClick?: () => void;    // Optional click handler for the card
}

const Card: React.FC<CardProps> = ({
  height = "h-auto",
  width = "w-full",
  heading= "CRIBONIX",
  subheading = "",
  tagline,
  number,
  description,
  image,
  onClick = () => {},
}) => {
  // Function to render the subheading with a gradient first letter
  const renderSubheading = () => {
    if (!heading) return null;

    const firstLetter = heading.charAt(0).toUpperCase();
    const remainingText = heading.slice(1);

    return (
      <div className="flex flex-col w-full">
        {/* Subheading with Gradient First Letter */}
        <h4 className="text-2xl mt-2 flex items-center">
          {/* First Letter with Gradient */}
          <span className="font-semibold bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] text-4xl text-transparent bg-clip-text">
            {firstLetter}
          </span>
          {/* Remaining Text */}
          <span className="font-semibold  text-white/30 text-4xl -ml-0.5">
            {remainingText}
          </span>
        </h4>

        {/* Number Positioned to the Right and Below Subheading */}
        <div className="mt-2 flex justify-end">
          <span className="text-6xl font-bold bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] text-transparent bg-clip-text">
            {number}
          </span>
        </div>

        <span className="font-semibold  text-white text-4xl mt-2 ">
            {subheading}
          </span>

        {/* Tagline Below the Number */}
        {tagline && (
          <span className="mt-4 text-2xl text-white">
            {tagline}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`bg-[#0f0f0f]  shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary ${height} ${width}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      
    >
      {/* Optional Image Section */}
      {image && (
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt={`Image for ${subheading}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Main Heading/Title */}
        {/* You can add a title here if needed */}
        {/* <h3 className="text-3xl font-semibold text-white mb-4">Title</h3> */}

        {/* Subheading and Number */}
        {renderSubheading()}

        {/* Description */}
        <p className="text-[#FFFFFF] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
