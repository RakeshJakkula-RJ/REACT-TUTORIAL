import { useState } from "react";
import { createContext } from "react";

// step-1 : createContext()

export const ThemeContext = createContext()

// step-2 : provider 

export const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState("dark");

    const ToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    };

    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            {props.children} 
            {/* <App /> */}
        </ThemeContext.Provider>
    );

};

