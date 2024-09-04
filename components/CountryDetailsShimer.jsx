import React from "react";

function CountryDetailsShimer({countryDetailTheme}) {
  const [isDark] = countryDetailTheme
  return (
    <div className={`sm:flex gap-20 md:h-[90vh] md:space-y-0 space-y-12 p-5 mt-[8%] justify-center ${isDark? "bg-gray-600" : ""} `}>
      <div className="max-w-[500px] h-96 w-96 shadow-xl shadow-gray-300 bg-gray-200"></div> 
      <div className="text-xl md:space-y-3 w-80 p-5 h-[400px] bg-gray-200 space-y-8">
        <div className="bg-gray-100 w-40 h-8 mb-8"></div>
        {
            Array.from({length : 9}).map(()=>{
            let key = Math.random()
              return <div className="bg-gray-100 w-52 h-5" key={key}></div>
            })
        }
      </div>
    </div>
  );
}

export default CountryDetailsShimer;
