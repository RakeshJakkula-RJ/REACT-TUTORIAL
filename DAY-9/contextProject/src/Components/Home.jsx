import React from "react";
import { useGlobalContext } from "../Context";
import { FaBars } from "react-icons/fa";

const Home = () => {

    const { openSidebar, openModal} = useGlobalContext();

     return (
         <main>
            
               <button onClick={openSidebar}>
                     <FaBars />
               </button>

               <button onClick={openModal}>
                   show modal
               </button>

         </main>
      );

};

export default Home;