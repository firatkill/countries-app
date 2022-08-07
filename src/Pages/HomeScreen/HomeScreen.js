import React from "react";
import HomeScreenCSS from "./HomeScreen.module.css";
import { Link } from "react-router-dom";
import HomeScreenActions from "../../Components/HomeScreen/HomeScreenActions/HomeScreenActions";
import CountryCardsContainer from "../../Components/HomeScreen/CountryCardsContainer/CountryCardsContainer";
import { useSelector } from "react-redux";
function HomeScreen() {
  const styled = HomeScreenCSS;
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div theme={theme} className={styled.HomeScreenContainer}>
      <HomeScreenActions />
      <CountryCardsContainer />
    </div>
  );
}

export default HomeScreen;
