import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailsShimer from "./CountryDetailsShimer";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function CountryDeatails(_props) {
  const [countryData, setCountryData] = useState([]);
  const {state} = useLocation();
  const [isDark] = useContext(themeContext)

  function updateCountry(data) {
    setCountryData({
      img: data.flags.svg,
      name: data.name.common,
      nativename: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-PK"),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies).map(
        (currency) => currency.name
      ),
      currenciessymbol: Object.values(data.currencies).map(
        (currsymbol) => currsymbol.symbol
      ),
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });
    
  }
  
  let param = useParams();
  let countryName = param.name;

  useEffect(() => {
    if (state) {
      updateCountry(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountry(data)
        if (!data.borders) {
          data.borders = [];
        }
        Promise.all(
          data.borders.map((border) =>
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderData]) => borderData.name.common)
          )
        )
        .then((bordersArray) => {
          setCountryData((prevState) => ({
            ...prevState,
            borders: bordersArray,
          }));
        });
      });
  }, [location]);

  if (countryData.length === 0) {
    return <CountryDetailsShimer countryDetailTheme = {[isDark]}/>;
  }

  return (
    <>
      <div className={`space-y-12 md:pt-10 pt-4 md:h-[90vh] ${isDark? "bg-gray-600 text-white" : ""}`}>
        <div className="md:mt-0 mt-5">
          <button
            onClick={() => history.back()}
            className="flex items-center cursor-pointer transition-all bg-gray-800 text-white md:ml-10 ml-4 px-6 h-10 p-1 rounded-lg border-gray-800 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            <svg
              className="h-6 w-6 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="5" y1="12" x2="19" y2="12" />{" "}
              <line x1="5" y1="12" x2="9" y2="16" />{" "}
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
            Back
          </button>
        </div>

        <div className="sm:flex gap-20 md:space-y-0 space-y-12 p-5 justify-center">
          <div className={`max-w-[500px] h-fit ${isDark? "shadow-xl shadow-gray-900" : "shadow-xl shadow-gray-500"} `}>
            <img src={countryData.img} className="object-cover" />
          </div>
          <div className="text-xl md:space-y-3 space-y-8">
            <p className="text-5xl ">{countryData.name}</p>
            <p>
              Native Name: <b>{countryData.nativename}</b>
            </p>
            <p>
              Population : <b>{countryData.population}</b>
            </p>
            <p>
              Region: <b>{countryData.region}</b>
            </p>
            <p>
              Sub Region: <b> {countryData.subregion}</b>
            </p>
            <p>
              Capital: <b>{countryData.capital}</b>
            </p>
            <p>
              Total Level Domain: <b>{countryData.tld}</b>
            </p>
            <p>
              Currencies: <b>{countryData.currencies}</b>
            </p>
            <p>
              Currency Symbol: <b>{countryData.currenciessymbol}</b>
            </p>
            <p>
              Languages: <b>{countryData.languages}</b>
            </p>

            <p className="grid md:grid-flow-col grid-flow-dense gap-2">
              <b className=" md:space-x-3 grid md:grid-flow-col grid-flow-dense">
                {countryData.borders.length > 0 && "Borders:"}
                {countryData.borders && countryData.borders.length > 0
                  ? countryData.borders.map((border) => {
                      return (
                        <Link
                          key={border}
                          to={`/${border}`}
                          className="bg-gray-300  px-2"
                        >
                          {border}
                        </Link>
                      );
                    })
                  : ""}
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDeatails;
