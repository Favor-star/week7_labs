import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover  rounded-2xl  h-fit flex flex-col  justify-end items-start pb-10 ps-10 relative min-h-[500px]"
      style={{ backgroundImage: "url(/bg2.webp)" }}
    >
      <div className="absolute bottom-10 left-10 space-y-5">
        <p className="text-4xl font-bold text-white">
          Find your next remote job
        </p>
        <HeroSearch />
      </div>
    </div>
  );
};

export default Hero;

const HeroSearch = () => {
  return (
    <div className="flex p-3 text-lg rounded-xl justify-between items-center bg-white w-fit h-fit">
      <SearchIcon strokeWidth={1.8} size={35} className="text-black/70" />
      <input
        type="text"
        name="homeSearch"
        id="homeSearch"
        placeholder="Search for jobs"
        className="p-2 outline-none focus-within:outline-none max-w-[500px] w-full"
      />
      <button className="text-white bg-primary p-2 px-4  rounded-lg font-medium">
        Search
      </button>
    </div>
  );
};
