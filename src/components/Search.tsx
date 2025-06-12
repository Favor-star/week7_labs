import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="bg-secondary flex items-center px-2 rounded-xl overflow-hidden">
      <SearchIcon strokeWidth={1.5} className="text-black/50" />
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        placeholder="Search job here"
        className="outline-transparent focus-within:outline-0 p-2 w-full max-w-[200px]"
      />
    </div>
  );
};

export default Search;
