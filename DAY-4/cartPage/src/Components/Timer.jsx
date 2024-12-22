import React from "react";
import { useState } from "react";
import { useEffect } from 'react';

const Timer = () => {

    const [count, setCount] = useState(10);

    useEffect(() => {

        let id = setInterval(() => {
            
           console.log("counter", Date.now());

             setCount((prev) => {
                  
                 if(prev <= 1){

                    clearInterval(id);
                 }
                 else{
                    return prev - 1;
                 }

             });
              
        }, 1000);

        return () => {                // cleanUp Function to stop setInterval 
            // 3. Unmounting Phase
             
            console.log("clean up function "); 

            clearInterval(id); 
       };

      }, []);

     return <div>{count}</div>

};


  export default Timer;