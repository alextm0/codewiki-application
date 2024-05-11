"use client"; // Without this line, I would get runtime errors in the browser

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

import { MdOutlineArrowDropDown } from "react-icons/md";

import { IoSchoolSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiMedal2Fill } from "react-icons/ri";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/Logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <span className="font-righteous text-3xl text-white">
                  CodeWiki
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - centered */}
          <div className="hidden md:flex flex-grow items-center justify-center">
            <nav className="flex space-x-10">
              {/* Navigation links */}
              <div className="relative after:absolute after:bg-gray-200 mt-2  after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                <Link href="/articles">
                  <div className="text-base font-medium text-gray-500 hover:text-gray-100">
                    Articole
                  </div>
                </Link>
              </div>

              {/* ------------------------------------------------------------- */}

              <div className="relative after:absolute after:bg-gray-200 mt-2 after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 clickable-cursor">
                <div className="font-medium text-gray-500 hover:text-gray-100 flex justify-center items-center gap-1 clickable-cursor">
                  <Dropdown
                    classNames={{ content: "font-medium font-poppins" }}
                  >
                    <DropdownTrigger>
                      <div className="flex items-center">
                        Categorii
                        <MdOutlineArrowDropDown />
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem href="/olimpiada">
                        <div className="flex gap-2">
                          <RiMedal2Fill /> Olimpiada
                        </div>
                      </DropdownItem>
                      <DropdownItem href="/admitere">
                        <div className="flex gap-2">
                          <FaUserGraduate /> Admitere
                        </div>
                      </DropdownItem>
                      <DropdownItem href="/bacalaureat">
                        <div className="flex gap-2">
                          <IoSchoolSharp /> Bacalaureat
                        </div>{" "}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}

              <div className="relative after:absolute after:bg-gray-200 mt-2 after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                <Link href="/problems">
                  <div className="text-base font-medium text-gray-500 hover:text-gray-100">
                    Probleme
                  </div>
                </Link>
              </div>
            </nav>
          </div>

          {/* Log In Button - right-aligned */}
          <div className="flex gap-2 justify-end lg:w-0 lg:flex-1">
            {/* <Link
              href={"/login"}
              className="text-white gradienttt font-poppins font-medium text-sm hover:text-gray-900 mx-auto lg:mx-0 inline-flex px-6 py-2   transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring"
            >
              Log In
            </Link> */}
            <button className="">
              <ThemeToggle />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
