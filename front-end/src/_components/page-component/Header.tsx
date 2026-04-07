"use client";
import React from "react";
import Link from "next/link";
import { Routes } from "@/src/_enums/routes.enum";
import MjcLogo from "../ui/MjcLogo";
import { useAuthSessionContext } from "@/src/_contexts/AuthSessionContext";
import ProfileMenu from "../ui/ProfileMenu";

const navItems = ["Home", "Modules", "About Us", "Sponsors"];

const Header = () => {
  const session = useAuthSessionContext();

  return (
    <header className="flex items-center justify-between p-4 text-lg md:px-30">
      <MjcLogo innerClassName="size-10 md:size-14" />
      {/* Desktop Nav */}
      <nav>
        <ul className="hidden gap-14 md:flex">
          {navItems.map((item, idx) => (
            <li key={idx} className="group relative">
              <Link
                href=""
                className="block pb-1 text-inherit transition duration-200 group-hover:text-red-500"
              >
                {item}
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Auth Button */}
      <div className="hidden md:block">
        {session ? (
          <ProfileMenu />
        ) : (
          <div className="group relative">
            <Link
              href={Routes.LOGIN}
              className="cursor-pointer pb-1 text-red-500"
            >
              Sign in
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          </div>
        )}
      </div>

      {/* Mobile Burger Menu */}
      <button className="flex flex-col gap-1.5 p-2 md:hidden">
        <span className="block h-0.5 w-6 rounded bg-black"></span>
        <span className="block h-0.5 w-6 rounded bg-black"></span>
        <span className="block h-0.5 w-6 rounded bg-black"></span>
      </button>
    </header>
  );
};

export default Header;
