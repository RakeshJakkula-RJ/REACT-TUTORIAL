
// example-1 :

// import React from "react"
// import { useRef } from "react";

// const App = () => {

//   const inputRef = useRef(null);
//   // useRef will always returns an object. 

//   const handleFocus = () => {

//     //  console.log(inputRef);

//       inputRef.current.focus();

//   };

//    console.log("render");

//    return <div>

//      <input type="text"  ref={inputRef}/> 
//      {/* ref ={}; is an attribute used to tell react that we are targeting inputRef to focus; and 
//            to ref we can only give the variable name with which stored useRef value */}
//      <button onClick={handleFocus}>Focus the input</button>

//    </div>
// };


// export default App

// example-2 :

// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const App = () => {

//  const[flag, setFlag] = useState(false);

//   // const [value, setValue] = useState(0); 
//   // instead of useState hook we can also use useRef

//   const value = useRef(0); // useRef : it will always return an object.
//   // changes in ref will not trigger re-render


//   function handleCount(){

//     value.current = value.current + 1;

//       console.log(value);

//   };

//   console.log("render");

//    return ( 
//          <>
//         <h1>count : {value.current} </h1>
//         <button onClick={handleCount}>click</button>
//         <button onClick={()=>setFlag(!flag)}>{flag ? "start" : "stop"}</button>
//          </> );
// };


// export default App;

// example-3 :


import React from "react";
import { useRef } from "react";

const App = () => {

  const inputRef = useRef([]); 

   const handleButton = () => {

    inputRef.current[0].focus(); //focusing on the first input

       console.log(inputRef); 
   }

    

   return <div> 
        
          <input type="text" style={{width : "20px"}} id="inputTag"
           ref={(element)=>{ return (inputRef.current[0] = element);
          }}/>

          <input type="text" style={{width : "20px"}} id="inputTag2" 
           ref={(element)=>{ return (inputRef.current[1] = element);
          }} />

          <input type="text" style={{width : "20px"}} id="inputTag3" 
           ref={(element)=>{ return (inputRef.current[2] = element);
          }}/>
          <input type="text" style={{width : "20px"}} id="inputTag4" 
           ref={(element)=>{ return (inputRef.current[3] = element);
          }}/>
           
           <button onClick={handleButton}>click</button>

        </div>

};

export default App;