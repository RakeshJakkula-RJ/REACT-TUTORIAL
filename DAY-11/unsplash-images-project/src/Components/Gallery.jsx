import React from "react"
import axios from "axios";
import { useGlobalContext } from "../Context/Context";
import { useQuery } from "@tanstack/react-query";


   const url = `https://api.unsplash.com/search/photos/?client_id=8Zp35TWQTiI1tHoAGywZGZvDOScit68j2BK6ZJ5GtSg`;

   console.log(import.meta.env.VITE_API_KEY);

  const Gallery = () => {

      const { searchTerm } = useGlobalContext();

      const response = useQuery({
            queryKey : ["images", searchTerm],
            queryFn : async () => {

                 const result = await axios.get(`${url}&query=${searchTerm}`);

                  return result.data;
            }, 
        });

        console.log(searchTerm);


           if(response.isLoading){
               return (
                  <section>
                     <h4>Loading...</h4>
                  </section>
               )
           };

           if(response.isError){

               return (
                 <section>
                    <h4>Error 404</h4>
                 </section>
               )
           };



        const results = response.data.results;

           if(results.length<1){

             return (
                <section>
                  <h4>No Results Found</h4>
                </section>
             );
           }

     return <section className="image-container">
             {results.map((item) => {
                       
                const url = item?.urls?.regular;

                    return <img src={url} alt={item.description} 
                                 key={item.id} className="img" />   
                        })}
             </section>

    };


     export default Gallery;

 

// https://api.unsplash.com/photos/?client_id=8Zp35TWQTiI1tHoAGywZGZvDOScit68j2BK6ZJ5GtSg