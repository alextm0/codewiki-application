import React from "react";

import ResourcesTable from "@/components/EduResources";
import PageDivider from "@/components/PageDivider";
import ProblemSetTable from "@/components/ProblemList";

const Page = () => {
  const mockResources = [
    {
      source: "Resource A",
      title: "Introduction to React",
      link: "https://reactjs.org",
      description: "A comprehensive guide to getting started with React.",
    },
    {
      source: "Resource B",
      title: "Advanced React Patterns",
      link: "https://advancedreact.com",
      description:
        "Learn about advanced patterns in React for scaling your applications.",
    },
    {
      source: "Resource C",
      title: "React Testing",
      link: "https://testing-library.com/react",
      description: "Tools and techniques for testing React applications.",
    },
  ];

  const mockProblemSet = [
    {
      source: "LeetCode",
      name: "Two Sum",
      sourceLink: "https://leetcode.com/problems/two-sum",
      link: "https://leetcode.com/problems/two-sum",
      badge: "easy",
      tags: "Array, Hash Table",
    },
    {
      source: "Codeforces",
      name: "Graph Cutting",
      sourceLink: "https://codeforces.com/problemset/problem/115/A",
      link: "https://codeforces.com/problemset/problem/115/A",
      badge: "hard",
      tags: "Graphs, DFS",
    },
    {
      source: "HackerRank",
      name: "Subarray Division",
      sourceLink: "https://www.hackerrank.com/challenges/the-birthday-bar",
      link: "https://www.hackerrank.com/challenges/the-birthday-bar",
      badge: "normal",
      tags: "Search",
    },
  ];

  const mockProblemSet2 = [
    {
      source: "LeetCode",
      name: "Two Sum",
      sourceLink: "https://leetcode.com/problems/two-sum",
      link: "https://leetcode.com/problems/two-sum",
      badge: "easy",
      tags: "Array, Hash Table",
    },
    {
      source: "Codeforces",
      name: "Graph Cutting",
      sourceLink: "https://codeforces.com/problemset/problem/115/A",
      link: "https://codeforces.com/problemset/problem/115/A",
      badge: "hard",
      tags: "Graphs, DFS",
    },
    {
      source: "HackerRank",
      name: "Subarray Division",
      sourceLink: "https://www.hackerrank.com/challenges/the-birthday-bar",
      link: "https://www.hackerrank.com/challenges/the-birthday-bar",
      badge: "normal",
      tags: "Search",
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-[#00044D] to-[#00044D] mb-16">
        <PageDivider />
      </div>
      <div className="max-w-[1024px] mx-auto">
        <div className="max-w-[1024px] mx-auto">
          {
            <ResourcesTable header="Resources" resource={mockResources} />
          }

          {
            <ProblemSetTable
              header="Practice Problems"
              problemSet={mockProblemSet}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Page;
