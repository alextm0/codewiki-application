"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // KaTeX CSS
import rehypeRaw from "rehype-raw";

import "highlight.js/styles/monokai.css";

import Link from "next/link";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ----------------------------------------
import Rating from "@/components/Rating";
import PageDivider from "@/components/PageDivider";

import { getPostById, getAllPostIds } from "@/services/fetchBlogData";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import "@/app/globals.css";

const BlogPost = ({ params }) => {
  const { blogID } = params;
  console.log(blogID);

  const [blog, setBlog] = React.useState({});

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getPostById(blogID);
        console.log(blogData.data);
        setBlog(blogData.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [blogID]);

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      {blog && (
        <div className=" md:flex pb-16 md:pb-0 gap-10 justify-center">
          {/* CONTENT COMPONENT */}
          <div className="max-w-full md:max-w-[1024px] px-6 md:px-20  md:py-16 space-y-12 text-gray-800 flex-grow">
            {/* RATING */}
            <Rating stars={blog.attributes?.rating} onBlogPost={true} />

            {/* TITLE AND AUTHORS */}
            <div>
              <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-poppins">
                {blog.attributes?.title}
              </h1>

              <h2 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
                Authors: {blog.attributes?.authors}
              </h2>
            </div>

            <div className="max-w-[1024px]">
              <ReactMarkdown
                children={blog.attributes?.content}
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
            </div>
            {/* Render Markdown Content */}

            {/* <BlocksRenderer
              content={blog.attributes?.problemSet}
              blocks={{
                paragraph: ({ children }) => (
                  <p className="my-2 text-base md:text-lg leading-relaxed text-gray-700">
                    {children}
                  </p>
                ),
                heading: ({ children, level }) => {
                  const headingClasses = [
                    "text-3xl md:text-3xl text-blue-600 font-bold mt-10 mb-6 leading-tight",
                    "text-xl md:text-xl text-blue-600 font-semibold mt-8 mb-4 leading-snug",
                    // Add other headings as before
                  ];
                  return React.createElement(
                    `h${level}`,
                    { className: headingClasses[level - 1] },
                    children
                  );
                },
                link: ({ children, url }) => (
                  <a
                    href={url}
                    className="text-blue-500 hover:text-blue-700 underline transition-colors duration-200 ease-in-out"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-200 text-gray-900 px-2 py-1 rounded-md">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto my-4">
                    {children}
                  </pre>
                ),
                // Define other blocks as needed
              }}
              modifiers={{
                bold: ({ children }) => (
                  <strong className="font-bold">{children}</strong>
                ),
                italic: ({ children }) => (
                  <span className="italic">{children}</span>
                ),
              }}
            /> */}

            {/* PAGE DIVIDER */}
            <div className="divider w-[100%]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
