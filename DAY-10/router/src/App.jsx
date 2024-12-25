import React from "react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import { ToastContainer } from "react-toastify";


const App = () => {

   return (

      <>
        <Navbar />
        <AllRoutes />
        <ToastContainer />

        </>
   );

};

 
  export default App;