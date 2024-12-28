"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageCard from "../Components/ImageCard";

interface Portfolio {
  _id: string;
  title: string;
  homePageImage: string; // Remote URL from API
}

const PortfolioHomePage: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

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

  const handleImageClick = (id: string) => {
    router.push(`/Portfolio/${id}`);
  };

  return (
    <div className="bg-primary scroll-smooth">
      {/* Hero Section */}
      <section className="relative py-10 bg-primary border-t border-secondary px-4 md:px-16 lg:px-32">
        <div className="h-auto flex flex-col justify-center text-center">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Brands We Admire and Collaborated with
          </h3>
          <h4 className="text-lg md:text-2xl lg:text-3xl text-gray-300 mt-4">
            A Glimpse into Our Success Stories and Creative Impact
          </h4>
        </div>
      </section>

      {/* Animated (Sticky Parallax) Image Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-12">
        {!loading && portfolios.length > 0 ? (
          <div
            className="relative"
            style={{ height: `${portfolios.length * 100}vh` }}
          >
            {portfolios.map((portfolio, index) => (
              <div
                key={portfolio._id}
                className="sticky top-0 w-full h-screen flex items-center justify-center cursor-pointer "
                style={{ zIndex: portfolios.length + index }}
                onClick={() => handleImageClick(portfolio._id)}
              >
                <ImageCard
                  src={portfolio.homePageImage}
                  alt={portfolio.title}
                  index={index}
                  totalImages={portfolios.length}
                />
                <h2 className="absolute bottom-12 text-lg md:text-2xl lg:text-3xl font-semibold text-center text-white ">
                  {portfolio.title}
                </h2>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white text-2xl">
            {loading ? "Loading..." : "No portfolios found."}
          </div>
        )}
      </section>

      {/* Bottom Spacer */}
      <div className="-h-32"></div>
    </div>
  );
};

export default PortfolioHomePage;
