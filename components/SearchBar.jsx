import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function SearchBar({ clickHandler}) {
  const [isDark] = useContext(themeContext)
  return (
    <div className="flex h-12 overflow-hidden items-center gap-3 shadow-xl border-2 p-2 ">
      <svg
        className={`h-5 w-5 sm:h-6 sm:w-6  ${isDark? "text-white" : "text-black"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        onChange={(e) => {
          clickHandler(e.target.value.toLowerCase());
        }}
        type="text"
        className={`outline-none bg-transparent flex-1 placeholder-opacity-60 ${isDark? "text-white" : "text-black placeholder-black" } `}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
