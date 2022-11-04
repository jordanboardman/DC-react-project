import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/favorites">Favorites</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about">About this Cool App</Link>{" "}
      </li>

      <li>
        {" "}
        <Link to="/jordan">Jordan's Favorites</Link>{" "}
      </li>
    </ul>
  );
};

export default Header;
