"use client";

import Hero from "@/components/Hero";
import PageDivider from "@/components/PageDivider";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { useState, useEffect } from "react";
import { getPosts } from "@/services/fetchBlogData";
import Articles from "@/components/ArticleSection";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // TODO: Find a better complextity for rendering post by id
  // TODO: Fix dark mode + light mode

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

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
