
import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo = () => {

    const [text, setText] = useState("");

    const [Todo, setTodo] = useState([]);

     function handleChange(event){
         
         setText(event.target.value);
     }


     function handleAddTodo(){

       const newItem =  {
             
            title : text,
            status : false, 
            id : Date.now() + Math.random( )
        }

         const todoAfterItemAddition = [...Todo, newItem];
          setTodo( todoAfterItemAddition); 
          setText("");

     };

        //  console.log("text", text);
        //  console.log("todo", Todo);

        function handleToggle(id){

            const todosAfterUpdation = Todo.map((item)=>
                     item.id === id ? {...item, status : !item.status} : item
            );

            setTodo(todosAfterUpdation);
            // react knows that their is a change
        }


     return ( <div>

              <div>

                   <AddTodo  text={text} handleChange={handleChange} 
                   handleAddTodo={handleAddTodo}/>

               </div>

               <ul> 
                      {/* list */}
                      
                      <TodoList Todo = {Todo} handleToggle={handleToggle} />
                    
               </ul>

       </div> 

       );

};

 export default Todo;