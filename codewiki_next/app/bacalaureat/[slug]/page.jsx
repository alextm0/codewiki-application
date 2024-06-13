"use client";

import React from "react";

import ResourcesTable from "@/components/EduResources";
import PageDivider from "@/components/PageDivider";
import ProblemSetTable from "@/components/ProblemList";

import Rating from "@/components/Rating";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // KaTeX CSS
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useFetchData } from "@/services/fetchData";

const Page = ({ params }) => {
  const { slug } = params;

  const API_BLOGS = process.env.NEXT_PUBLIC_API_BLOGS;
  const { data: blog, error } = useFetchData(`${API_BLOGS}?filters[badge][$eq]=bacalaureat&filters[slug][$eq]=${slug}&populate=*`);

  const blogData = blog?.data[0];

  if (error) {
    console.error("Error fetching blog:", error);
    return <div>Failed to load blog.</div>;
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      {blogData && (
        <div className=" md:flex pb-16 md:pb-0 gap-10 justify-center">
          {/* CONTENT COMPONENT */}
          <div className="max-w-full md:max-w-[1024px] px-6 md:px-20  md:py-16 space-y-12 text-gray-800 flex-grow">
            {/* RATING */}
            <Rating stars={blogData.attributes?.rating} onBlogPost={true} />

            {/* TITLE AND AUTHORS */}
            <div>
              <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-poppins">
                {blogData.attributes?.title}
              </h1>

              <h2 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
                Authors: {blogData.attributes?.authors}
              </h2>
            </div>

            {/* Render Markdown Content */}
            <div className="max-w-[1024px]">
              <ReactMarkdown
                children={blogData.attributes?.content}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                className="markdown text-justify"
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        codeTagProps={{
                          style: {
                            fontSize: "15px",
                            lineHeight: "1.4",
                            fontFamily: "'Roboto Mono', monospace",
                            whiteSpace: "pre-wrap",
                            backgroundColor: "transparent",
                            display: "block",
                            color: "white",
                          },
                        }}
                        children={String(children).replace(/\n$/, "")}
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        showLineNumbers={true}
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
              {
                <ResourcesTable
                  header="Resources"
                  resource={blogData.attributes?.eduResources}
                />
              }

              {
                <ProblemSetTable
                  header="Practice Problems"
                  problemSet={blogData.attributes?.problemList}
                />
              }
            </div>

            {/* PAGE DIVIDER */}
            <div className="divider w-[100%]"></div>
          </div>
        </div>
      )}

      {!blogData && (
        <div className="flex justify-center items-center mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Page not ready yet!</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
