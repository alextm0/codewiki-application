"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import Category from "../../components/Category";
import PageDivider from "../../components/PageDivider";
import { useFetchData } from "@/services/fetchData";

const Page = () => {
  const API_CATEGORIES = process.env.NEXT_PUBLIC_API_CATEGORIES;
  const id = 3;
  const { data: categories, error } = useFetchData(`${API_CATEGORIES}/${id}`);

  if (error) {
    console.error("Error fetching categories:", error);
    return <div>Failed to load categories.</div>;
  }

  if (!categories) {
    return (
      <div>
        <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
          <PageDivider />
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  const categoriesArray = categories?.data?.attributes?.topics.map((category) => (
    <Category
      key={uuidv4()}
      category={category.category}
      categoryName={category.categoryName}
      categoryDescription={category.description}
      topics={category.topics}
    />
  ));

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      <div className="max-w-[1024px] mx-auto">
        <div className="max-w-[1024px] mx-auto">{categoriesArray}</div>
      </div>
    </div>
  );
};

export default Page;
