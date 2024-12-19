"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ImageCard from "../Components/ImageCard"; // Adjust path as needed
import head from "./images/Container.png"; // Adjust path as needed

interface Portfolio {
  _id: string;
  title: string;
  homePageImage: string;
}

interface ImageData {
  src: StaticImageData;
  alt: string;
}

const PortfolioHomePage: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolios`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch portfolios");
        }

        const data: Portfolio[] = await res.json();
        setPortfolios(data);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  // Single image data array, similar to what you had in your ImageSection
  const images: ImageData[] = [{ src: head, alt: "homeImage" }];

  return (
    <div className="bg-primary scroll-smooth">
      <section className="relative py-20 bg-primary border mx-32 border-t-1 border-secondary border-l-0 border-r-0 border-b-0">
        {/* Top Spacer */}
        <div className="h-[40vh] flex flex-col justify-center">
          <h3 className="text-6xl font-bold mx-32">
            Our Work in Action <br />
          </h3>
          <h4 className="text-3xl mx-32 mt-8">
            A Glimpse into Our Success Stories and Creative Impact
          </h4>
        </div>

        {/* Animated Image Section */}
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

      {/* Portfolios Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Portfolios</h1>
        {loading ? (
          <div className="text-white text-2xl text-center">Loading...</div>
        ) : portfolios.length === 0 ? (
          <div className="text-center py-12">No portfolios found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((portfolio) => (
              <Link
                key={portfolio._id}
                href={`/Portfolio/${portfolio._id}`}
                className="block relative group"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={portfolio.homePageImage}
                    alt={portfolio.title}
                    width={500}
                    height={500}
                    className="rounded-md group-hover:opacity-75 transition-opacity duration-300 object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-2 text-center text-white">
                  {portfolio.title}
                </h2>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioHomePage;
