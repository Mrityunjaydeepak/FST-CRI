import React from "react";
import Image from "next/image";

interface CardProps {
  height?: string; // Tailwind CSS height classes, e.g., "h-64"
  width?: string; // Tailwind CSS width classes, e.g., "w-80"
  heading?: string; // Optional heading text
  tagline?: string; // Optional tagline or subtitle
  number: string; // Number to display (e.g., "50Cr+")
  subheading?: string; // Optional subheading or subtitle
  description: string; // Description or detailed content of the card
  image?: string; // Optional image URL or path
  onClick?: () => void; // Optional click handler for the card
}

const Card: React.FC<CardProps> = ({
  height = "h-auto",
  width = "w-full",
  heading = "CRIBONIX",
  subheading = "",
  tagline,
  number,
  description,
  image,
  onClick = () => {},
}) => {
  // Function to render the subheading with a gradient first letter
  const renderSubheading = () => {
    return (
      <div className="flex flex-col w-full">
        {/* Subheading with Gradient First Letter */}
        <h4 className="text-2xl mt-2 flex items-center">
          <span className="font-bold text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-6xl transition-all duration-300">
            {number}
          </span>
        </h4>

        {/* Subheading Below Number */}
        <span className="font-semibold text-white text-4xl mt-2">
          {subheading}
        </span>

        {/* Tagline Below the Subheading */}
        {tagline && <span className="mt-4 text-2xl text-white">{tagline}</span>}
      </div>
    );
  };

  return (
    <div
      className={`group bg-primary shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary ${height} ${width}`}
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
        {/* Subheading and Number */}
        {renderSubheading()}

        {/* Description */}
        <p className="text-[#FFFFFF] mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
