import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";

function BlogPost({ badge, title, date, description, articleImage }) {
  const imageUrl = articleImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_API_ROOT}${articleImage.data.attributes.url}`
    : null;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:shadow-2xl rounded-lg md:w-80">
      <div className="relative h-48 w-full">
        {imageUrl ? (
          <Image
            src="http://localhost:1337/uploads/post_a15bb17ef6.png"
            alt="Image description"
            layout="fill"
            objectFit="cover"
            unoptimized={true} // ! Remove this line in production
          />
        ) : (
          // Placeholder or alternative content if imageUrl is not available
          <div className="flex justify-center items-center h-full">
            <span>Image not available</span>
          </div>
        )}
      </div>

      <div className="pl-4 pt-4 text-sm font-medium">
        <div className="flex items-center ">
          <div className="text-sm text-gray-600 font-medium">
            <a href="#" className="m-1 rounded text-xs text-orange-500 ">
              {" "}
              {capitalizeFirstLetter(badge)}{" "}
            </a>
            •
          </div>
          <span className="ml-2 font-rubik"> {date} </span>
        </div>
      </div>
      <div className="bg-white w-full px-4 pb-4 pt-1">
        <a href="" className="text-gray-900 text-xl font-bold font-quicksand">
          {title}
        </a>

        <p className="text-gray-600 font-light text-sm mt-2 mb-2 font-montserrat">
          {description}
        </p>

        <div className="flex items-center">
          <p className="text-purple-200 mt-5 ml-auto flex items-center gap-1 mr-3 font-medium">
            Citeste acum
            <AiOutlineArrowRight className="mt-[2px]" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
