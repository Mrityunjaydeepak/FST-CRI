// components/Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  height?: string;         // Tailwind CSS height classes, e.g., "h-64"
  width?: string;          // Tailwind CSS width classes, e.g., "w-80"
  subheading?: string;     // Optional subheading or subtitle
  description: string;     // Description or detailed content of the card
  image?: string;          // Optional image URL or path
  onClick?: () => void;    // Optional click handler for the card
}

const Card: React.FC<CardProps> = ({
  height = "h-auto",
  width = "w-full",
  subheading = "",
  description,
  image,
  onClick = () => {},
}) => {
  // Function to split the subheading into first letter and the rest
  const renderSubheading = () => {
    if (!subheading) return null;

    const firstLetter = subheading.charAt(0).toUpperCase();
    const remainingText = subheading.slice(1);

    return (
      <h4 className="text-2xl mt-2 flex items-start">
        {/* First Letter with Gradient */}
        <span className="flex font-bold bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] text-4xl items-start justify-center text-transparent bg-clip-text uppercase">
          {firstLetter}
        </span>
        {/* Remaining Text */}
        <span className="ml-1 text-3xl items-baseline text-white">
          {remainingText}
        </span>
      </h4>
    );
  };

  return (
    <div
      className={`bg-[#0f0f0f] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary ${height} ${width}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {image && (
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt={`Image`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-6">
        {/* Main Heading/Title */}
        <h3 className="text-3xl font-semibold text-white flex justify-between">
          {/* You can add content here if needed */}
        </h3>

        {/* Subheading with Gradient First Letter */}
        {renderSubheading()}

        {/* Description */}
        <p className="text-[#E9E9E9] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
