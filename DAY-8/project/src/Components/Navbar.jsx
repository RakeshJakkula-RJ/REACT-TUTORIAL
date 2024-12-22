import React from "react";
import { AppContext } from "../Context/AppContextProvider";
import { useContext } from "react";

const Navbar = () => {

    const { isAuth, login, logout } = useContext(AppContext);

    return (

       <div style={{display: "flex", 
          justifyContent : "space-between",        
                 gap : "50px" }}>
 
          <h5>Is user Authenticated : { isAuth ? "Yes" : "No" }</h5>

          { !isAuth && <button onClick={login}>login</button> } 

          { isAuth && <button onClick={logout}>logout</button> }
            
          </div>

          );

};

export default Navbar; 