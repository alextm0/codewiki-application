"use client";

import Hero from "@/components/Hero";
import PageDivider from "@/components/PageDivider";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { useState, useEffect } from "react";
import { getPosts } from "@/services/fetchBlogData";
import Articles from "@/components/ArticleSection";

import { useFetchData } from "@/services/fetchData";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const API_BLOGS = process.env.NEXT_PUBLIC_API_BLOGS;
  const { data: posts, error } = useFetchData(`${API_BLOGS}?populate=*`);
  if (error) {
    console.error("Error fetching posts:", error);
    return <div>Failed to load posts.</div>;
  }

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <main className="bg-white ">
      <div className="flex-grow bg-pattern bg-cover">
        <Hero />
        <PageDivider />
      </div>

      <Courses />
      <Features />

      {posts && <Articles blogs={posts} />}

      <Contact />
    </main>
  );
}
