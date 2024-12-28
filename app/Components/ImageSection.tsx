"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImageData } from "next/image";
import Image1 from "./images/KFCfinal.png";
import Image2 from "./images/Adidasfinal.png";
import Image3 from "./images/RayBanfinal.png";
import Image4 from "./images/Redmifinal.png";
import Image5 from "./images/Swiggy&Zomatofinal.png";
import Image6 from "./images/UrbanPlusfinal.png";
import Image7 from "./images/Cosmofeedfinal.png";
import Image8 from "./images/CafeMulberryfinal.png";

import ImageCard from "./ImageCard";

interface ImageData {
  src: StaticImageData;
  alt: string;
}

const ImageSection: React.FC = () => {
  const images: ImageData[] = [
    { src: Image1, alt: "Beautiful Landscape 1" },
    { src: Image2, alt: "Beautiful Landscape 2" },
    { src: Image3, alt: "Beautiful Landscape 3" },
    { src: Image4, alt: "Beautiful Landscape 4" },
    { src: Image5, alt: "Beautiful Landscape 5" },
    { src: Image6, alt: "Beautiful Landscape 6" },
    { src: Image7, alt: "Beautiful Landscape 7" },
    { src: Image8, alt: "Beautiful Landscape 8" },
  ];

  return (
    <section className="relative py-20 bg-primary border-t border-secondary">
      {/* Top Spacer */}
      <div className="h-auto px-4 md:px-16 lg:px-32 text-center">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          Brands we admire and collaborated with
        </h3>
        <h4 className="text-lg md:text-2xl lg:text-3xl text-gray-300 mt-4">
          A Glimpse into Our Success Stories and Creative Impact
        </h4>
      </div>

      {/* Image Stack Container */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-4">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            index={index}
            totalImages={images.length}
          />
        ))}
      </div>

      {/* Bottom Spacer */}
      <div className="h-16"></div>
    </section>
  );
};

export default ImageSection;
