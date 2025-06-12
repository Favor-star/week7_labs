import Link from "next/link";
import React from "react";
import Search from "./Search";
import {
  BookMarkedIcon,
  BookmarkIcon,
  CogIcon,
  Settings2,
  SettingsIcon,
} from "lucide-react";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Jobs",
      href: "/jobs",
    },
    {
      label: "Companies",
      href: "/companies",
    },
    {
      label: "Post a Job",
      href: "/post",
    },
  ];
  return (
    <nav className="flex justify-between items-center w-full border-b-2 border-secondary pb-2">
      <div className="space-x-10 flex w-full">
        <span>Logo</span>
        <ul className="space-x-4 flex">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href} className=" text-black ">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full flex items-center justify-end gap-3">
        <Search />
        <span className=" p-2 rounded-xl bg-secondary">
          <BookmarkIcon strokeWidth={1.5} size={20} />
        </span>
        <span className=" p-2 rounded-xl bg-secondary">
          <SettingsIcon strokeWidth={1.5} size={20} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
