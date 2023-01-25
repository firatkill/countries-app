import React from "react";
import CountryDetailCardCSS from "./CountryDetailCard.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import CountryDetailComponent from "../CountryDetailComponent/CountryDetailComponent";
function CountryDetailCard(props) {
  const styled = CountryDetailCardCSS;
  const theme = useSelector((state) => state.ui.theme);
  const countryName = props.countryName;
  const countryList = JSON.parse(sessionStorage.getItem("countries"));
  const country = countryList.find(
    (elem) => elem.name.official === countryName
  );

  return (
    <div theme={theme} className={styled.CountryDetailCardContainer}>
      <div className={styled.backButton}>
        <Link theme={theme} className={styled.link} to="/">
          <IoMdArrowRoundBack /> Back
        </Link>
      </div>
      <CountryDetailComponent country={country} />
    </div>
  );
}

export default CountryDetailCard;
