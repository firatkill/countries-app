import React, { useState } from "react";
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(
    localStorage.getItem("countries") === null
  );

  const useFetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    sessionStorage.setItem("countries", JSON.stringify(data));
    setIsLoading(false);
  };
  console.log("fetched");
  return {
    isLoading: isLoading,

    fetchCountries: useFetchCountries,
  };
};
