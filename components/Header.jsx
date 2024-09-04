import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function Header() {
  const [isDark , setIsDark] = useContext(themeContext)

  return (
    <header className={`p-5 sticky top-0 z-20 w-full h-full ${isDark? "bg-gray-600 text-white border-b-2 border-slate-100 " : "bg-white shadow-md "}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl  font-serif font-semibold">
          Where in the world?
        </h1>
        <p className="flex items-center text-base sm:text-lg md:text-xl text-black space-x-2 hover:cursor-pointer" onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem("isDarkMode",!isDark)
        }}>
          <svg
            className={`h-5 w-5 sm:h-6 sm:w-6 ${isDark? "hidden" : ""}`}
            id="moon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>

          <svg
            className={`h-5 w-5 sm:h-6 sm:w-6 ${isDark? "text-white" : "hidden"}`}
            id="sun"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
          </svg>
          <span className={`hidden sm:inline ${isDark? "text-white":""} `}>  {`${isDark? " Light " : " Dark "} Mode`}</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
