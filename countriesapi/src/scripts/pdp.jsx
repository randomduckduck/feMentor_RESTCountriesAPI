import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Pdp(props) {
  console.log("pdp page. values are:");
  console.log("this:", this);
  console.log("props:", props);
  let location = useLocation();
  console.log("location:", location);
  let country;
  if (location.state === null) {
    let countriesData = window.countriesData;
    let currentCountryCode = location.pathname.split("/country/")[1];
    country = countriesData.filter(
      (country) => country.alpha3Code == currentCountryCode
    )[0];
  } else {
    country = location.state.country;
  }
  console.log("country obj is now:", country);
  let languageString = country.languages.reduce((acc, language) => {
    return acc + language.name + " , ";
  }, " ");
  languageString = languageString.slice(0, -2);

  let currencyString = country.currencies.reduce(
    (acc, currency) => acc + currency.name + " , ",
    " "
  );

  let topLeveDomainString = country.topLevelDomain.reduce(
    (acc, entry) => acc + entry + " , ",
    " "
  );
  topLeveDomainString = topLeveDomainString.slice(0, -2);
  currencyString = currencyString.slice(0, -2);
  function convertCodeToName(countryCode) {
    let countriesData = window.countriesData;
    let reqCountryObj = countriesData.filter(
      (country) => country.alpha3Code == countryCode
    )[0];
    return reqCountryObj.name;
  }
  let borderCountryCodes = country.borders;
  //   let borderCountryNames = borderCountryCodes?.map(convertCodeToName);
  return (
    <div>
      <div className="backSection">
        {/* <button className="backButton"> */}{" "}
        <Link to="/" className="backBtn">
          {"<--"} Back
        </Link>
        {/* </button> */}
      </div>
      <div className="pdpContentHolder">
        <div className="pdpImageSection">
          <img src="" alt="countrypdpImage" className="pdpCountryImage" />
        </div>
        <div className="pdpDetailsSection">
          <div className="pdpCountryName">{country.name}</div>
          <div className="subDetailsSection">
            <div className="subDetails1">
              <p>Native Name : {country.nativeName}</p>
              <p>Population: {country.population}</p>
              <p>Region : {country.region}</p>
              <p>sub region : {country.subregion}</p>
              <p>Capital : {country.capital}</p>
            </div>
            <div className="subDetails2">
              <p>Top Level Domain : {topLeveDomainString} </p>
              <p>Currencies :{currencyString}</p>
              <p>Languages : {languageString}</p>
            </div>
          </div>
          <div className="borderCountriesSection">
            Border Countries :
            {borderCountryCodes?.map((countryCode) => (
              //   <button className="borderButton">{countryName}</button>
              <Link to={"/country/" + countryCode} className="borderBtn">
                {convertCodeToName(countryCode)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
