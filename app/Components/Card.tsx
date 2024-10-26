// components/Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  height?: string;         // Tailwind CSS height classes, e.g., "h-64"
  width?: string;          // Tailwind CSS width classes, e.g., "w-80"
  heading: string;         // Main heading/title of the card
  subheading?: string;     // Optional subheading or subtitle
  description: string;     // Description or detailed content of the card
  image?: string;          // Optional image URL or path
  onClick?: () => void;    // Optional click handler for the card
}

const Card: React.FC<CardProps> = ({
  height = "h-auto",
  width = "w-full",
  heading,
  subheading = "",
  description,
  image,
  onClick = () => {},
}) => {
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
            alt={`${heading} Image`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-3xl font-semibold text-white flex justify-between">{heading}</h3>
        {subheading && <h4 className="text-2xl text-white mt-2">{subheading}</h4>}
        <p className="text-[#E9E9E9] mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
