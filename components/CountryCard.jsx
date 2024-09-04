import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, population, region, capital, img, data , cardTheme }) {
  const [isDark] = cardTheme
  return (
    <div className={`${isDark? "shadow-xl shadow-slate-900" : "shadow-xl shadow-slate-400"} hover:scale-105 max-w-72 h-96 rounded-xl overflow-hidden`}>
      <Link to={`/${name}`} state={data}> 
      
        <div className="w-full h-48 overflow-hidden ">
          <img src={img} alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="p-5">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="pt-5">
            <b>Population:</b> {population.toLocaleString("en-PK")}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>

      </Link>
    </div>
  );
}

export default CountryCard;
