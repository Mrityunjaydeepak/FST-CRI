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
    { src: Image4, alt: "Beautiful Landscape 3" },
    { src: Image5, alt: "Beautiful Landscape 3" },
    { src: Image6, alt: "Beautiful Landscape 3" },
    { src: Image7, alt: "Beautiful Landscape 3" },
    { src: Image8, alt: "Beautiful Landscape 3" },
  ];

  return (
    <section className="relative py-20 bg-primary border mx-32 border-t-1 border-secondary border-l-0 border-r-0 border-b-0">
      {/* Top Spacer */}
      <div className="h-[40vh]">
        <h3 className="text-6xl font-bold mx-32">
          Our Work in Action <br />
        </h3>
        <h4 className="text-3xl mx-32 mt-8">
          A Glimpse into Our Success Stories and Creative Impact
        </h4>
      </div>

      {/* Image Stack Container */}
      <div className="relative max-w-7xl mx-auto h-[800vh]">
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
      <div className="h-[-40vh]"></div>
    </section>
  );
};

export default ImageSection;
