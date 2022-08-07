import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import CountryDetailPage from "./Pages/CountryDetailPage/CountryDetailPage";
import Layout from "./Components/UI/Layout/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/:countryName" element={<CountryDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
