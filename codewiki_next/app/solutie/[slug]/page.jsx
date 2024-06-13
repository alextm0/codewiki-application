"use client";

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // KaTeX CSS
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import PageDivider from "@/components/PageDivider";
import { useFetchData, fetcher } from "@/services/fetchData";

function Solutie({ params }) {
  const { slug } = params

  const API_SOLUTIONS = process.env.NEXT_PUBLIC_API_SOLUTIONS;

  const { data: solution, error } = useFetchData(`${API_SOLUTIONS}?filters[slug][$eq]=${slug}&populate=*`);

  // extract the json
  const solutionData = solution?.data[0];

  if (error) {
    console.error("Error fetching solution:", error);
    return <div>Failed to load solution.</div>;
  }

  if (!solution) {
    return (
      <div>
        <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
          <PageDivider />
        </div>
        <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
          <div className="max-w-full md:max-w-[1024px] px-6 md:px-20 md:py-16 space-y-12 text-gray-800 flex-grow">
            <div>
              <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-poppins">
                Loading...
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
        <div className="max-w-full md:max-w-[1024px] px-6 md:px-20 md:py-16 space-y-12 text-gray-800 flex-grow">
          <div>
            <Link href={`${solutionData?.attributes?.link}`}>
              <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-poppins">
                {solutionData?.attributes?.title}
              </h1>
            </Link>
            <h1 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
              Tags: {solutionData?.attributes?.tags}
            </h1>
            <h2 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
              Authors: {solutionData?.attributes?.author}
            </h2>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown
              children={solutionData?.attributes?.content}
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
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
        </div>
      </div>
    </div>
  );
}

export default Solutie;
