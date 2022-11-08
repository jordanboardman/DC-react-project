import React from "react";
import CocktialList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <CocktialList />
      <SearchForm />
    </div>
  );
};

export default Home;
