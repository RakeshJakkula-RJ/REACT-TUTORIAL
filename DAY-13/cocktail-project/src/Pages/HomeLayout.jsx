import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {

  const navigate = useNavigation();

  //  console.log(navigate);

    const isPageLoading = navigate.state === "loading";

      //const value = "some value"

     return (
          <>
            <Navbar />
          {/* <Link to="/about">About page</Link> */}

          {/* <div className="loading"/> */}

          <section className="page">

            { isPageLoading ? <div className="loading"/> : <Outlet   /> }
             
          </section>
         </>
    );
};


  export default HomeLayout;  