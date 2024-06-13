"use client";

import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Category from "../../components/Category";
import PageDivider from "../../components/PageDivider";

import { useFetchData } from "@/services/fetchData";

function Page() {
  const API_CATEGORIES = process.env.NEXT_PUBLIC_API_CATEGORIES;
  const id = 1;
  const { data: categories, error } = useFetchData(`${API_CATEGORIES}/${id}`);

  if (error) {
    console.error("Error fetching categories:", error);
    return <div>Failed to load categories.</div>;
  }

  const categoriesArray = categories?.data?.attributes?.topics.map((category) => {
    return (
      <Category
        key={ uuidv4() }
        category={category.category}
        categoryName={category.categoryName}
        categoryDescription={category.description}
        topics={category.topics}
      />
    );
  }); 


  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      <div className="max-w-[1024px] mx-auto">
        {
          categories && (
            <div className="max-w-[1024px] mx-auto">{categoriesArray}</div>
          )
        }
      </div>
    </div>
  );
}

export default Page;
