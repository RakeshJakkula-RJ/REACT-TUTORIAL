import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/Wrappers/CocktailList";

const CocktailList = ({ drinks }) => {

    if(!drinks || drinks == "no data found"){

        return <h4 style={{textAlign : "center"}}>No Matching Cocktail Found</h4>
    };

    const formattedDrinks = drinks.map((item) => {
   
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

        return { 
            id:idDrink, 
            name : strDrink, 
            image : strDrinkThumb,
            info : strAlcoholic,
             glass : strGlass
            };

          });

    return <Wrapper>
            {formattedDrinks.map((item) => {
                return <CocktailCard key={item.id} {...item} />
            })}
           </Wrapper>

}; 

  export default CocktailList;