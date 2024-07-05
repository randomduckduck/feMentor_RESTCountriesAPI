import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlpCard({ country }) {
  let navigateObj = useNavigate();
  //   console.log("navigateObj is:", navigateObj);
  function handleClick() {
    navigateObj("/feMentor_RESTCountriesAPI/country/" + country.alpha3Code, {
      state: { country: country },
    });
  }
  return (
    <div onClick={handleClick} className="boxShadowClass">
      <div className="imgSection">
        <img
          src={country.flags.png}
          // src=""
          alt="countryFlagImage"
        />
      </div>
      <div className="cardContentSection">
        <div className="countryName">{country.name}</div>
        <div className="countryDetails">
          <p className="cardPop">
            <span className="subTitle">Population</span>: {country.population}
          </p>
          <p className="cardRegion">
            <span className="subTitle">Region</span>: {country.region}{" "}
          </p>
          <p className="cardCapital">
            <span className="subTitle">Capital</span> : {country.capital}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
