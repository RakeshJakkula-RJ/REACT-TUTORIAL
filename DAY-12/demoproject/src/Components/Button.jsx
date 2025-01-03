import React, { useState } from "react";

const Button = () => {

    const [ count, setCount ] = useState(0);

    function handleIncrease(){
        setCount(count + 1);
    };

     function handleDecrease(){
         setCount(count - 1);
     }

   return (
        <div>
           
            <h1>Current : {count}</h1>
            <button onClick={handleIncrease}>Increase by 1</button>
            <button onClick={handleDecrease}>Decrease by 1</button>
       </div>
   )
}


 export default Button;