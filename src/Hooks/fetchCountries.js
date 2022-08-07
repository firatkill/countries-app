export const fetchCountries = async () => {
  if (sessionStorage.getItem("countries") === null) {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log("fetched");
    sessionStorage.setItem("countries", JSON.stringify(data));
  }
};
