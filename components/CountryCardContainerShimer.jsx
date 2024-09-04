import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";


function CountryCardContainerShimer() {
  const [isDark] = useContext(themeContext)
  return (
    <>
       <div className={`grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-8 lg:gap-20 ${isDark? "bg-gray-600 text-white" : ""}`}>
        {
          Array.from({ length: 100 }).map(() => {
            let key = Math.random()
            return (
              <div className={`max-w-72 h-96 rounded-xl overflow-hidden ${isDark? "bg-gray-500" : "bg-gray-300"}`} key={key}>
                <div className="mt-52 p-5 space-y-4">
                <p className={`h-4  ${isDark? "bg-gray-400" : "bg-gray-100"}`}></p>
                <p className={`h-4  ${isDark? "bg-gray-400" : "bg-gray-100"}`}></p>
                <p className={`h-4  ${isDark? "bg-gray-400" : "bg-gray-100"}`}></p>
                <p className={`w-32 h-4  ${isDark? "bg-gray-400" : "bg-gray-100"}`}></p>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default CountryCardContainerShimer;
