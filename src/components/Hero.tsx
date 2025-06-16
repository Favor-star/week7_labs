import { SearchIcon } from "lucide-react";
import React from "react";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover  rounded-2xl  h-fit flex flex-col  justify-end items-start pb-10 ps-10 relative min-h-[500px] "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/office1.jpg)",
      }}
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
