import React from "react";
import {  Link, useLoaderData } from "react-router";
import Wrapper from "../assets/Wrappers/CocktailPage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

   const singleCocktailQuery = (id) => {

        return {

              queryKey : ["cocktail", id],
              queryFn  : async () => {

               const { data } = await axios.get(`${ singleCocktailUrl }${id}`);

                 return data;
              }
        }
   }

 export const loader = (queryClient) => async ({ params }) => {

      const { id } = params;

       await queryClient.ensureQueryData(singleCocktailQuery(id));

     // const { data } = await axios.get(`${ singleCocktailUrl }${id}`);
         
        return { id };
}

const Cocktail = () => {

    const { id } = useLoaderData();   

      const { data } = useQuery(singleCocktailQuery(id));

     const singleDrink = data.drinks[0];

     const {strDrink : name,
           strDrinkThumb : image,
            strAlcoholic : info, 
            strCategory : category,
            strInstructions : instructions,
            strGlass : glass,
               } = singleDrink;

                const validIngredients =  Object.keys(singleDrink)
                .filter((key) => key.startsWith("strIngredient") 
                && singleDrink[key] !== null).map((key) => singleDrink[key]);

                    console.log(validIngredients)

             //  console.log(singleDrink);

     return <Wrapper>
                 <header>
                    <Link to="/" className="btn">Back Home</Link>
                    <h3>{name}</h3>
                 </header> 

                 <div className="drink">
                    <img src={image} alt={name} className="image"/>
                    <div className="drink-info">
                         <p>
                            <span className="drink-data">name:</span>
                            {name}
                         </p>

                         <p>
                            <span className="drink-data">category:</span>
                            {category}
                         </p>

                         <p>
                            <span className="drink-data">info:</span>
                            {info}
                         </p>

                         <p>
                            <span className="drink-data">glass:</span>
                            {glass}
                         </p>

                         <p>
                            <span className="drink-data">ingredients:</span>
                            {validIngredients.map((item, index) => {
                                 return(
                                   <span key={item} >
                                   {item} {index < validIngredients.length - 1 ? "," : ""}
                                   </span>
                                 );
                            })} 
                         </p>

                         <p>
                            <span className="drink-data">instructions:</span>
                            {instructions}
                         </p>

                    </div>
                 </div>
            </Wrapper>
 
};


  export default Cocktail;