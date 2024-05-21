"use client";

import React from "react";

// Nextjs import PageDivider from the components folder
import PageDivider from "@/components/PageDivider";

import { getSolutionBySlug } from "@/services/fetchBlogData";

import Link from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // KaTeX CSS
import rehypeRaw from "rehype-raw";

function Solutie({ params }) {
  const { slug } = params;

  const [solution, setSolution] = React.useState({});

  React.useEffect(() => {
    const fetchSolution = async () => {
      try {
        const solutionData = await getSolutionBySlug(slug);
        setSolution(solutionData.data[0]);
      } catch (error) {
        console.error("Error fetching solution:", error);
      }
    };

    fetchSolution();
  }, [slug]);

  if (!solution)
    return (
      <div>
        <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
          <PageDivider />
        </div>

        <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
          <div className="max-w-full md:max-w-[1024px] px-6 md:px-20 md:py-16 space-y-12 text-gray-800 flex-grow">
            <div>
              <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-poppins">
                There is not solution here :(
              </h1>
            </div>
          </div>
        </div>
      </div>
    );

  // solution: slug, title, content, rating, authors, tags, badge, source

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>

      {solution && (
        <div className="md:flex pb-16 md:pb-0 gap-10 justify-center">
          <div className="max-w-full md:max-w-[1024px] px-6 md:px-20 md:py-16 space-y-12 text-gray-800 flex-grow">
            <div>
              <Link href={`${solution.attributes?.link}`}>
                <h1 className="text-gray-800 font-bold text-4xl w-full -mt-5 -mb-3 font-poppins">
                  {solution.attributes?.title}
                </h1>
              </Link>

              {/* Tags is a text */}
              <h1 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
                Tags: {solution.attributes?.tags}
              </h1>

              <h2 className="text-gray-600 font-medium text-lg mt-5 -mb-3 font-quicksand">
                Authors: {solution.attributes?.author}
              </h2>
            </div>

            <div className="prose max-w-none">
              <ReactMarkdown
                children={solution.attributes?.content}
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
      )}
    </div>
  );
}

export default Solutie;
