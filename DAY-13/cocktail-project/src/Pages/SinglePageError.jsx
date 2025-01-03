import React from "react";
import { useRouteError } from "react-router";


 const SinglePageError = () => {

    const error = useRouteError();
    console.log(error);

     return <h2>something went wrong...</h2>

 };

 export default SinglePageError;
