import { SearchIcon } from "lucide-react";

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

export default HeroSearch;
