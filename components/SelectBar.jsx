import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function SelectBar({setRegion}) {
  const [isDark] = useContext(themeContext)
  return (
    <>
      <select onChange={(e)=>setRegion(e.target.value)} className={`outline-none border-2 items-center shadow-xl sm:w-60 w-full h-12 p-2 ${isDark? "bg-gray-600 text-white" : ""}`} >
        <option hidden>Filter by Region</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
       
      </select>
    </>
  );
}

export default SelectBar;
