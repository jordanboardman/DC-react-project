import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <>
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>details</Link>
      </div>
    </>
  );
};

export default Cocktail;
