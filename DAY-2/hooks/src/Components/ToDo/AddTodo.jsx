
import React from "react";

const AddTodo = ({handleChange, text, handleAddTodo}) => {

     return ( <>
     
     <input type="text" onChange={handleChange} value={text}/>
                   {/* to store into text */}

                   <button onClick={handleAddTodo}>Add</button> 
                   {/* to store into todo */}
     </>
      );

};


 export default AddTodo;