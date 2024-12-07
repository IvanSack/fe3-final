import React, { useContext } from "react";
import { ContextGlobal } from "Components/utils/Global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favs</Link></li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;