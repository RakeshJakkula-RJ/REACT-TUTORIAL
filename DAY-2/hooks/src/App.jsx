// import { useState } from 'react'


//  const App = () => {

//      const [count, setCount] = useState(0); // destructuring // hook // 0-->initial value
//         // console.log(count);

//         function handleClick(){
           
//            setCount(count+1); // whenever this setCount triggers 
//            // react checks if here are any changes to be made.
//            // count = 2
//         }

//         console.log("re-renderd component", count);

//       return  <button onClick={handleClick}>clicked {count} times </button>
//  };

// export default App;

// example-2 : 


// import { useState } from 'react';

// export default function App() {

//   function handleClick() {
//     setCount(count + 1);
//   }

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton count={count} handleClick={handleClick}/>
//       <MyButton count={count} handleClick={handleClick}/>
//     </div>
//   );
// }

// function MyButton({count, handleClick}) {
  
//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// example-3 :

 import React from "react";
import Todo from "./Components/ToDo/Todo";

 const App = () => {

      return  <div>
        
         <Todo />

      </div>
      
 };

   export default App;
