import React from "react";
import { Outlet, useLoaderData } from "react-router";
import axios from "axios";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    const searchCocktailsQuery = (searchTerm) => {

           return {
                queryKey : ["search", searchTerm || "all"],
                queryFn : async () => {

                     searchTerm = searchTerm || "vodka"

                     const response = await axios.get(`${ cocktailSearchUrl }${ searchTerm }`);

                     return response.data.drinks;
                }
           }
    }

export const loader = ( queryClient ) => async ({ request }) => {

  const searchQuery = "margarita";

   const url = new URL(request.url)
    
    const searchTerm = url.searchParams.get('search') || "";

     await queryClient.ensureQueryData( searchCocktailsQuery( searchTerm ) );

     return { searchTerm };
}

const Landing = () => {

 const {  searchTerm } = useLoaderData();
  // console.log(drinks);

       const { data : drinks} = useQuery(searchCocktailsQuery( searchTerm ));

     return (
          <>
            <SearchForm searchTerm={ searchTerm } />
           <CocktailList drinks={drinks} />
             
          </>
          );

};


  export default Landing; 