import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import CountryDetailPage from "./Pages/CountryDetailPage/CountryDetailPage";
import Layout from "./Components/UI/Layout/Layout";
import Spinner from "./Components/UI/Spinner/Spinner";
import { useFetch } from "./Hooks/fetchCountries";
function App() {
  const { isLoading, fetchCountries } = useFetch();
  fetchCountries();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/:countryName" element={<CountryDetailPage />} />
          </Routes>
        </Layout>
      </Router>
      )
    </>
  );
}

export default App;
