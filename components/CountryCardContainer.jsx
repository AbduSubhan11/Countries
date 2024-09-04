import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import CountryCardContainerShimer from "./CountryCardContainerShimer";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";
import { useFilter } from "../Hooks/filterHook";


function CountryCardContainer({ myQuery, region }) {
  const [count, setCount] = useState([]);
  const [isDark] = useContext(themeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = useFilter(data, myQuery, region);
        setCount(filteredData);
      });
  }, [myQuery, region]);

  let myData = count.map((data) => {
    return (
      <CountryCard
        cardTheme={[isDark]}
        key={data.name.common}
        name={data.name.common}
        population={data.population}
        region={data.region}
        capital={data.capital}
        img={data.flags.svg}
        data={data}
      />
    );
  });

  if (count.length === 0) {
    return <CountryCardContainerShimer />;
  }

  return (
    <div
      className={`grid grid-cols-1  p-8 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-8 lg:gap-20 ${isDark ? "bg-gray-600 text-white md:h-screen" : ""}`}
    >
      {myData}
    </div>
  );
}

export default CountryCardContainer;
