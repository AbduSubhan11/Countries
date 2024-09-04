import React from "react";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import CountryCardContainer from "../components/CountryCardContainer";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function Home() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [isDark] = useContext(themeContext)

  return (
    <>
      <main className= {`sm:flex justify-between sm:space-y-0 space-y-4 p-5 ${isDark? "bg-gray-600" : ""}`}>
        <SearchBar clickHandler={setQuery}   />
        <SelectBar setRegion={setRegion}  />
      </main>
      <CountryCardContainer myQuery={query} region={region} />
    </>
  );
}

export default Home;
