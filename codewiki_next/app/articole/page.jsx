"use client";

import React from 'react'

import PageDivider from '@/components/PageDivider';
import Articles from '@/components/ArticleSection';

import { useFetchData } from "@/services/fetchData";

const ArticlePage = () => {
  const API_BLOGS = process.env.NEXT_PUBLIC_API_BLOGS;
  const { data: posts, error } = useFetchData(`${API_BLOGS}?populate=*`);
  if (error) {
    console.error("Error fetching posts:", error);
    return <div>Failed to load posts.</div>;
  }

  return (
    <div className="bg-white font-poppins">
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      <Articles blogs={posts ? posts : ""} />
    </div>
  )
}

export default ArticlePage;