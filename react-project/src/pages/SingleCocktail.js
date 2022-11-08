import React from "react";
import { useParams, Link } from "react-router-dom";

const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams;
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);

  if (!cocktail) {
    return <h2>no cocktail to display</h2>;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section>
      <Link to="/">Back to Home</Link>
      <h2>{name}</h2>
      <div>
        <img src={image} alt={name} />
        <div>
          <p>
            <span>name :</span>
            {name}
          </p>
          <p>
            <span>category :</span>
            {category}
          </p>
          <p>
            <span>info :</span>
            {info}
          </p>
          <p>
            <span>glass :</span>
            {glass}
          </p>
          <p>
            <span>instructions :</span>
            {instructions}
          </p>
          <p>
            <span>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
