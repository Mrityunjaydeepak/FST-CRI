"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Define the Portfolio interface
interface Portfolio {
  _id: string;
  title: string;
  headerImage: string;
  imageGallery: { imgUrl: string; heading?: string; content?: string }[];
}

// Props for the PortfolioPage component
interface PortfolioPageProps {
  portfolio: Portfolio;
}

// Carousel Modal Component
function CarouselModal({
  images,
  initialIndex,
  onClose,
}: {
  images: { imgUrl: string; heading?: string; content?: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Image Display */}
        <div className="relative w-full h-[70vh] bg-black flex items-center justify-center">
          <Image
            src={images[currentIndex].imgUrl}
            alt={images[currentIndex].heading || "Carousel Image"}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-md"
            priority
          />
        </div>

        {/* Heading / Content Overlay */}
        {(images[currentIndex].heading || images[currentIndex].content) && (
          <div className="text-white p-4 text-center">
            {images[currentIndex].heading && (
              <h2 className="text-2xl font-semibold">
                {images[currentIndex].heading}
              </h2>
            )}
            {images[currentIndex].content && (
              <p className="mt-2">{images[currentIndex].content}</p>
            )}
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold px-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

// Component to display the portfolio
const PortfolioPageClient: React.FC<PortfolioPageProps> = ({ portfolio }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  if (!portfolio) {
    return <div>Portfolio not found.</div>;
  }

  const openCarousel = (index: number) => {
    setInitialIndex(index);
    setShowCarousel(true);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Portfolio Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          {portfolio.title}
        </h1>

        {/* Home Image - Increased Height */}
        <div className="relative w-full h-96 mb-8">
          <Image
            src={portfolio.headerImage}
            alt="Portfolio Home Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Image Gallery with Hover Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.imageGallery.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openCarousel(index)}
            >
              <div className="relative w-full h-60">
                <Image
                  src={image.imgUrl}
                  alt={image.heading || "Gallery Image"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
              {/* Overlay visible on hover */}
              {(image.heading || image.content) && (
                <div className="absolute inset-0 bg-black bg-opacity-0 text-white flex flex-col justify-end p-4 rounded-md opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {image.heading && (
                    <h2 className="text-lg font-semibold">{image.heading}</h2>
                  )}
                  {image.content && <p className="text-sm">{image.content}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      {showCarousel && (
        <CarouselModal
          images={portfolio.imageGallery}
          initialIndex={initialIndex}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </>
  );
};

export default PortfolioPageClient;
