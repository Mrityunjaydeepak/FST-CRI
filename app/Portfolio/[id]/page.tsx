import React from "react";
import PortfolioPageClient from "./PortfolioPageClient";

// Portfolio data interface
interface Portfolio {
  _id: string;
  title: string;
  headerImage: string;
  imageGallery: {
    imgUrl: string;
    heading?: string;
    content?: string;
  }[];
}

// Function to fetch the portfolio data from the API
async function fetchPortfolioById(id: string): Promise<Portfolio | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/portfolios/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch portfolio data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return null;
  }
}

// Server Component
export default async function Page({ params }: { params: { id: string } }) {
  const portfolio = await fetchPortfolioById(params.id);

  if (!portfolio) {
    return <div>Portfolio not found.</div>;
  }

  return <PortfolioPageClient portfolio={portfolio} />;
}
