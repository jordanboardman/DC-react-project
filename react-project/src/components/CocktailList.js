import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails } = useGlobalContext();
  console.log(cocktails);

  if (cocktails.length < 1) {
    return <h2>no cocktails matched your search criteria</h2>;
  }
  return (
    <section>
      <h2>cocktails</h2>
      <div>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
