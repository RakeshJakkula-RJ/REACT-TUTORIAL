import React from "react";
import { Link, useRouteError } from "react-router";
 import img from "../assets/404.svg";
import Wrapper from "../assets/Wrappers/ErrorPage";

const Error = () => {

      const error = useRouteError();

       console.log(error);

       if(error.status === 400){
          return (
               <Wrapper>
                <div>
                    <img src={img} />
                    <h3>Ohh !</h3>
                    <p>we can't seem to find the page you are looking for</p>
                    <Link to="/">Back Home</Link>
               </div>

               </Wrapper>
               
          )
       }

       console.log(img);

     return <div>
             <h3>
              oops! something went wrong
             </h3>
           </div>

};


  export default Error; 