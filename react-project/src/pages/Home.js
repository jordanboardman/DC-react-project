import { response } from "express";
import React from "react";
// import CocktialList from "../components/CocktailList";
// import SearchForm from "../components/SearchForm";
import { useState, useEffect } from "react";

const Home = () => {
  // const [products, setProducts] = useState("placeholder");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(async () => {
    fetch(
      await `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
    )
      .then((result) => {
        // console.log(result.json());
        // setIsLoaded(true);
        // setItems(result);
        return result.json();
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  return <ul>dude</ul>;
};

export default Home;
