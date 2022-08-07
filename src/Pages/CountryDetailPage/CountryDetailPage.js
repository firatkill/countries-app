import React from "react";
import CountryDetailPageCSS from "./CountryDetailPage.module.css";
import CountryDetailCard from "../../Components/CountryDetailPage/CountryDetailCard/CountryDetailCard";
import { useParams } from "react-router-dom";

function CountryDetailPage() {
  const params = useParams();

  return <CountryDetailCard countryName={params.countryName} />;
}

export default CountryDetailPage;
