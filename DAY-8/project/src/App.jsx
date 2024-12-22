import React from "react";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContextProvider";

const App = () => {
 
  // step-3 : to access data from context we need to use a hook called useContext()

  const {theme, ToggleTheme} = useContext(ThemeContext);

  return <div className="App" 
           style={{ background : theme === "dark" ? "black" : "orange", 
            color : theme === "dark" ? "white" : "white",
            padding : "10px"
           }}>

     <Navbar />
     <button onClick={ToggleTheme}>Toggle Theme</button>

  </div>

};

export default App;