
import React, { useState } from "react";

const App = () => {

const [count, setCount] = useState(0);

  function handleIncrease(){
     setCount((prev)=>prev + 100); // 0+100=>100
     setCount((prev)=>prev + 100); // 100+100=>200
     setCount((prev)=>prev + 100); // 200+100=>300
     setCount((prev)=>prev + 100); // 300+100=>400
  };

   function handleDecrease(){
     setCount(count - 100);
   };

   return (
       <div>
            <h1>Current : {count}</h1>
            <button onClick={handleIncrease}>Increase by 100</button>
            <button onClick={handleDecrease}>Decrease by 100</button>
       </div>
   )

};


export default App;