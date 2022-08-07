import React, { useRef } from "react";
import HomeScreenActionsCSS from "./HomeScreenActions.module.css";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
function HomeScreenActions() {
  const styled = HomeScreenActionsCSS;
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const selectedRegion = useSelector((state) => state.ui.selectedRegion);
  const filterValue = useSelector((state) => state.ui.filterValue);
  const changeHandler = (e) => {
    dispatch(uiActions.assignSelectedRegion(e.currentTarget.value));
  };
  const inputHandler = (e) => {
    dispatch(uiActions.assignFilterValue(inputRef.current.value));
  };

  return (
    <div theme={theme} className={styled.HomeScreenActionsContainer}>
      <div theme={theme} className={styled.inputGroup}>
        <FiSearch className={styled.icon} />
        <input
          ref={inputRef}
          value={filterValue}
          onChange={inputHandler}
          placeholder="Search for a country..."
          type="text"
        />
      </div>
      <select
        onChange={changeHandler}
        theme={theme}
        className={styled.selectList}
      >
        <option defaultValue disabled>
          Filter by Region
        </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default HomeScreenActions;
