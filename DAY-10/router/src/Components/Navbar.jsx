import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/AuthContextProvider";


const links = [
           
    {
        path : "/", text : "Home"
    },

    {
        path : "/about", text : "About"
    },

    {
        path : "/cart", text : "Cart"
    },

    {
        path : "/users", text : "Users"

    },

  ];

      const Navbar = () => {

         const {isAuth, login, logout} = useGlobalContext();
                 
                const defaultStyle = {

                     color : "black",
                     TextDecoration : "none"
                }

                const activeStyle = {
                    
                     color : "red",
                     TextDecoration : "none"
                }
        

         return (

               <div style={{display : "flex", gap : "10px"}}>
 
                    {links.map((link) => {
       
                        return ( 

                           <NavLink to={link.path} key={link.path} 
                              style={({ isActive }) => {
                                    return isActive ? activeStyle : defaultStyle;
                              }}>

                                  {link.text}

                             </NavLink> 
 
                              );

                   })}

                   <p>user logged IN : { isAuth ? "Yes" : "No" }</p>

                   { isAuth ? <button onClick={logout}>logout</button> 
                       :  <button onClick={login}>login</button> }

               </div>
             
          );

      };

 
     export default Navbar;
