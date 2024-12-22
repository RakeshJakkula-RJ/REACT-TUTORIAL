
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
         setIsAuth(true);
    };

    const logout = () => {
         setIsAuth(false);
    };
    
     return (

         <AppContext.Provider value={{ isAuth, login, logout }}>
             {children}
         </AppContext.Provider>
     )
}