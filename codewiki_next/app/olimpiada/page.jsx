"use client";

import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Category from "../../components/Category";
import PageDivider from "../../components/PageDivider";

import { useState, useEffect } from "react";
import { getCategories, getCategoryById } from "../../services/fetchBlogData";

function Page() {
  // Fetch data from API: NEXT_PUBLIC_API_CATEGORIES
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryById(1);
      setCategories(data.data);
    };
    fetchData();
  }, []);

  const categoriesArray = categories?.attributes?.topics.map((category) => {
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
        <div className="max-w-[1024px] mx-auto">{categoriesArray}</div>
      </div>
    </div>
  );
}

export default Page;
