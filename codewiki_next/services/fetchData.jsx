"use client";

import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetchData = (endpoint, fallbackData) => {
  const { data, error } = useSWR(endpoint, fetcher, { fallbackData });
  return { data, error };
};

export const useFetchBlogs = (badge, slug, fallbackData) => {
  const API_BLOGS = process.env.NEXT_PUBLIC_API_BLOGS;
  const endpoint = `${API_BLOGS}?filters[badge][$eq]=${badge}&filters[slug][$eq]=${slug}&populate=*`;
  return useFetchData(endpoint, fallbackData);
};
