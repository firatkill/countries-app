import React, { useEffect } from "react";
import CountryCardsContainerCSS from "./CountryCardsContainer.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CountryCardsContainer() {
  const styled = CountryCardsContainerCSS;
  const filterValue = useSelector((state) => state.ui.filterValue);

  const data = JSON.parse(sessionStorage.getItem("countries"));
  const selectedRegion = useSelector((state) => state.ui.selectedRegion);
  return (
    <div className={styled.CountryCardsContainer}>
      {selectedRegion === "All" &&
        data
          .filter((elem) =>
            elem.name.official.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((country) => {
            return (
              <Link
                key={data.indexOf(country)}
                className={styled.link}
                to={`/${country.name.official}`}
              >
                <Card
                  key={data.indexOf(country)}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  name={country.name.official}
                  mapUrl={country.maps.googleMaps}
                />
              </Link>
            );
          })}
      {data
        .filter((elem) => elem.region === selectedRegion)
        .filter((elem) =>
          elem.name.official.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((country) => {
          return (
            <Link className={styled.link} to={`/${country.name.official}`}>
              <Card
                key={data.indexOf(country)}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
                name={country.name.official}
                mapUrl={country.maps.googleMaps}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default CountryCardsContainer;
//flag data[0].flags.svg
//population data[0].population
//region data[0].region
//capital data[0].capital[0]
//name data[0].name.official
