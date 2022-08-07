import React from "react";
import CardCSS from "./Card.module.css";
import { useSelector } from "react-redux";
import { ImNewTab } from "react-icons/im";
import { Link } from "react-router-dom";
function Card(props) {
  const styled = CardCSS;
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div theme={theme} className={styled.CardContainer}>
      <div className={styled.card_img}>
        <img alt="flag" src={props.flag} />
      </div>
      <div className={styled.card_content}>
        <h3 className={styled.card_title}>{props.name}</h3>
        <p className={styled.card_text}>
          <span>Population:</span> {props.population}
        </p>
        <p className={styled.card_text}>
          <span>Region:</span> {props.region}
        </p>
        <p className={styled.card_text}>
          <span>Capital:</span> {props.capital}
        </p>
      </div>
      <a
        className={styled.cardLink}
        onClick={(e) => e.stopPropagation()}
        href={props.mapUrl}
        target="_blank"
        rel="noreferrer"
      >
        <button theme={theme} className={styled.cardButton}>
          Visit Maps <ImNewTab />
        </button>
      </a>
    </div>
  );
}

export default Card;
