import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

   const [isAuth, setIsAuth] = useState(" ");

      const login = () => {
 
         setIsAuth(true);

         toast("log in successfull...");
      };

       const logout = () => {

           setIsAuth(false);

           toast("try again");
       }

         return (
          
             <AuthContext.Provider value={{isAuth, login, logout}}>
                 {children }
             </AuthContext.Provider>
            );

      };


       export const useGlobalContext = () => {

             return useContext(AuthContext);
       };


   