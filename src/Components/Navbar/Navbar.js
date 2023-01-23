import Reac, { useEffect } from "react";
import NavbarCSS from "./Navbar.module.css";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../Redux/ui-slice";
import { fetchCountries } from "../../Hooks/fetchCountries";
import { NavLink } from "react-router-dom";
function Navbar() {
  const styled = NavbarCSS;
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);
  const modeSwitchHandler = () => {
    dispatch(uiActions.switchMode());
  };

  return (
    <div theme={theme} className={styled.NavbarContainer}>
      <div className={styled.logo}>
        <h2>Where in the world?</h2>
      </div>
      <div
        theme={theme}
        onClick={modeSwitchHandler}
        className={styled.themeButton}
      >
        {theme === "dark" ? (
          <>
            <MdDarkMode className={styled.icon} />
            Dark Mode
          </>
        ) : (
          <>
            <MdLightMode className={styled.icon} />
            Light Mode
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
