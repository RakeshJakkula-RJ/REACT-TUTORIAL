
// import React from "react";
// import Button from "./Button/Button";
 
// export const App = () => {

//   const orangeButton = () => {
//     alert("orange button clicked");
//    }

//     const yellowButton = () => {
//        alert("yellow button clicked");
//     }

//     const grayButton = ()=>{
//        alert("gray button clicked");
//     }

//      return (
//      <>
//      <Button buttonText="Try this one!"
//        backGroundColor="orange"
//         click = {orangeButton}
//      />

//      <Button buttonText="click me!"
//        backGroundColor="yellow"
//         click = {yellowButton}
//      />
//      <Button buttonText="logout"
//        backGroundColor="gray"
//         click = {grayButton}
//      />

//    </> 
//      );

// };


// import React from "react";

// export const App = ()=>{

//   let isUserAuthenticated = true; //login

//      return(    //ternary operator
//       <div>    
//           {isUserAuthenticated ? 

//           ( <h1>User Authenticated</h1> )

//           : ( <h1>User Not Authenticated</h1>)
//           }   
//       </div>
//      )
// };


  import React from "react";
import { Greetings } from "./Greetings/Greetings";
import "./App.css"
    export const App = ()=>{

      return (
       <div className="App">
        <Greetings/>
       </div>
      )
    };