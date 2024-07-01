import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlpCard({ country }) {
  let navigateObj = useNavigate();
  //   console.log("navigateObj is:", navigateObj);
  function handleClick() {
    navigateObj("/country/" + country.alpha3Code, {
      state: { country: country },
    });
  }
  return (
    <div onClick={handleClick}>
      <div className="imgSection">
        <img
          // src={country.flag}
          src=""
          alt="countryFlagImage"
        />
      </div>
      <div className="cardContentSection">
        <div className="countryName">{country.name}</div>
        <div className="countryDetails">
          <p className="cardPop">Population : {country.population}</p>
          <p className="cardRegion">Region: {country.region} </p>
          <p className="cardCapital">Capital : {country.capital} </p>
        </div>
      </div>
    </div>
  );
}