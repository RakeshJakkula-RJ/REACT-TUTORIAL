import React from "react";
import { useState } from "react";

const AddTodo = ({handleAdd}) => {

    const [inputValue, setInputValue] = useState("");

     function handleClick(){

        handleAdd(inputValue);

     }; 

     return <>
      
      <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
     
        <button onClick={handleClick}>Add</button>
     </>

};


 export default AddTodo;   