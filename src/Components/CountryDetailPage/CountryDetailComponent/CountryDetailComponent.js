import React from "react";
import CountryDetailComponentCSS from "./CountryDetailComponent.module.css";

function CountryDetailComponent(props) {
  const styled = CountryDetailComponentCSS;
  const country = props.country;

  const currencies = [];
  for (let currency in country.currencies) {
    currencies.push(currency);
  }
  const languages = [];

  for (let language in country.languages) {
    languages.push(language);
  }
  const names = [];
  for (let somename in country.name.nativeName) {
    names.push(country.name.nativeName[`${somename}`].official);
  }

  return (
    <div className={styled.CountryDetailComponentContainer}>
      <div className={styled.imgWrapper}>
        <img alt="flag" src={country.flags.svg} />
      </div>
      <div className={styled.countryInfoWrapper}>
        <h1>{country.name.official}</h1>
        <div className={styled.row}>
          <div className={styled.firstCol}>
            <ul>
              <li>
                <span>Native Name:</span>
                <p>{names[0]}</p>
              </li>
              <li>
                <span>Population:</span>
                <p>{country.population}</p>
              </li>
              <li>
                <span>Region:</span>
                <p>{country.region}</p>
              </li>
              <li>
                <span>Sub Region:</span>
                <p>{country.subregion}</p>
              </li>
              <li>
                <span>Capital:</span>
                <p>{country.capital}</p>
              </li>
            </ul>
          </div>
          <div className={styled.secondCol}>
            <ul>
              <li>
                <span>Top Level Domain:</span>
                <p>{country.tld}</p>
              </li>
              <li>
                <span>Currencies:</span>
                <p>{currencies.join(",")}</p>
              </li>
              <li>
                <span>Languages:</span>
                <p>{languages.join(",")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailComponent;
