
import React from "react";

const TodoList = ({Todo, handleToggle}) => {

     return (
          <>
            {Todo.map((item)=>{

                const {title, status, id} = item;

      return (
       <li key={id}>

          {title} - {status ? "Completed" : "Not Completed"}

          <button onClick={()=>handleToggle(id)}>Toggle</button>
          
          </li>);
          
          })}
   
          
          </>);
     

};

export default TodoList;