import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Count = () => {

    const [count, setCount] = useState(0);  // this useState is to handle the count i.e; icrement

    const [data, setData] = useState([]);   // this useState is to handle the data and to render the data into react-dom

    console.log("above useEffect");

    useEffect(()=>{   // 1. Mounting Phase (Creation)

        const fetching = async()=>{  // 2.Updating Phase 
            try{

                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                const data = await response.json();

                // console.log("inside useEffect");
                 setData(data);

                console.log("inside useEffect");
                 
            }
            catch(error){
                console.log(error);
            }
            
        };

          fetching(); 
    }, []);

       console.log("below useEffect");

     return ( 
          <>
         <div>{count}</div>
         <Button setCount={setCount} count={count}/>

          {data.map((item)=>{
             return <p>{item.title}</p>
          })}
          </>

    );

};


function Button({count, setCount}){

     return <button onClick={()=>setCount(count + 1)}>Inc</button>
     
}; 


 export default Count;