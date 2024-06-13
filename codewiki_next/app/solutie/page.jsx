"use client";

import React from "react";
import useSWR from "swr";
import Link from "next/link";
import PageDivider from "@/components/PageDivider";
import { fetcher } from "@/services/fetchBlogData"; // Assume fetcher is defined to fetch data

export default function SolutionsPage() {
  const { data, error } = useSWR('${NEXT_PUBLIC_API_SOLUTIONS}?filters[slug][$eq]=${slug}&populate=*', fetcher);

  if (error) {
    console.error("Error fetching solutions:", error);
    return <div>Failed to load solutions.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
        <div className="max-w-full md:max-w-[1024px] px-6 md:px-20 md:py-16 space-y-12 text-gray-800 flex-grow">
          {data.map((solution) => (
            <div key={solution.slug} className="space-y-4">
              <Link href={`/solutie/${solution.slug}`}>
                <h2 className="text-gray-800 font-bold text-2xl">
                  {solution.title}
                </h2>
              </Link>
              <p className="text-gray-600">
                {solution.description}
              </p>
              <Link href={`/solutie/${solution.slug}`}>
                <a className="text-blue-500">Read more</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
