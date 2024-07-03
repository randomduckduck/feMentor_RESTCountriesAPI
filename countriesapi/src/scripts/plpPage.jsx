import React, { useEffect, useState } from "react";
import PlpCard from "./plpCard";
import { useLocation } from "react-router-dom";
function Search(props) {
  function handleInput(e) {
    // console.log(e.target.value);
    props.setInputTerm(e.target.value);
  }
  return (
    <div className="searchHolder">
      <input
        type="text"
        className="plpSearch"
        value={props.inputTerm}
        onInput={handleInput}
        placeholder="Search for a country..."
      />
    </div>
  );
}
function Filter(props) {
  function handleSelect(e) {
    let selectedValue = e.target.value;
    console.log("selectedvalue is:", selectedValue);
    if (selectedValue != props.filterTerm) {
      props.setFilterTerm(selectedValue);
    }
  }
  return (
    <div className="filterHolder">
      <select name="regionselect" id="regionselect" onInput={handleSelect}>
        <option value="SelectRegion">Select Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
export default function PlpPage({ countriesData }) {
  let loca = useLocation();
  let [plpCountriesData, setPlpCountriesData] = useState(countriesData);
  let [inputTerm, setInputTerm] = useState("");
  let [filterTerm, setFilterTerm] = useState("SelectRegion");
  console.log("loca is:", loca);
  function filterList() {
    let searchValue = inputTerm;
    let finalList = countriesData;
    //apply region filter first
    if (filterTerm != "SelectRegion") {
      let tempfilterTerm = filterTerm.toLowerCase();
      finalList = countriesData.filter((country) => {
        return country.region.toLowerCase().includes(tempfilterTerm);
      });
    }
    //apply input filter on filtered region list
    if (searchValue.length > 0) {
      let tempSearchValue = searchValue.toLowerCase();
      finalList = finalList.filter((country) => {
        return country.name.toLowerCase().includes(tempSearchValue);
      });
    }
    setInputTerm(searchValue);
    setPlpCountriesData(finalList);
  }
  useEffect(() => {
    filterList();
  }, [inputTerm, filterTerm]);
  return (
    <div className="plpMain">
      <div className="searchAndFilterSection">
        <Search inputTerm={inputTerm} setInputTerm={setInputTerm}></Search>
        <Filter filterTerm={filterTerm} setFilterTerm={setFilterTerm}></Filter>
      </div>
      <div className="plpContentHolder">
        {plpCountriesData.map((countryData) => {
          return <PlpCard country={countryData}></PlpCard>;
        })}
      </div>
    </div>
  );
}
