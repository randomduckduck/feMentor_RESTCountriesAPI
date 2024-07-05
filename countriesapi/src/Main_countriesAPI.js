import React from "react";
import { fetchData } from "./scripts/fetchfunctions";
import PlpPage from "./scripts/plpPage";
import Pdp from "./scripts/pdp";
import "./css/main.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Topbar from "./scripts/Topbar";
export default function Main_countriesAPI() {
  let datareceived = fetchData();
  window.countriesData = datareceived;
  return (
    //topbar
    //search and filter
    //plp (uses plp card component to display countries)
    <>
      <BrowserRouter>
        <Topbar></Topbar>
        <Routes>
          <Route
            path="/feMentor_RESTCountriesAPI/"
            exact
            element={<PlpPage countriesData={datareceived}></PlpPage>}
          ></Route>
          <Route
            path="/feMentor_RESTCountriesAPI/country/:countryCode"
            element={<Pdp></Pdp>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
