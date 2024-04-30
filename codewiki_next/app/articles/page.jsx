"use client";

import { getPosts } from '@/services/fetchBlogData';
import React from 'react'
import { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar';
import PageDivider from '@/components/PageDivider';
import Articles from '@/components/ArticleSection';

const ArticlePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

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