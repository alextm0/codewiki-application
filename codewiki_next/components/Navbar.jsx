"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

import { MdOutlineArrowDropDown } from "react-icons/md";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Content } from "next/font/google";

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
              <Link href="/articles">
                <div className="text-base font-medium text-gray-500 hover:text-gray-100">
                  Articole
                </div>
              </Link>

              {/* ------------------------------------------------------------- */}

              <div className="font-medium text-gray-500 hover:text-gray-100 flex justify-center items-center gap-1">
                <Dropdown classNames={{
                  content: "font-medium font-poppins",
                }}>
                  <DropdownTrigger>
                    Categorii
                  </DropdownTrigger>                  
                  <DropdownMenu>
                    <DropdownItem href="/olimpiada">Olimpiada</DropdownItem>
                    <DropdownItem href="/admitere">Admitere</DropdownItem>
                    <DropdownItem href="/bacalaureat">Bacalaureat</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <MdOutlineArrowDropDown />
              </div>

              {/* ------------------------------------------------------------- */}

              <Link href="/problems">
                <div className="text-base font-medium text-gray-500 hover:text-gray-100">
                  Probleme
                </div>
              </Link>
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