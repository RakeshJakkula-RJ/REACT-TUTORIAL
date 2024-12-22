import React from "react";
import AddTodo from "./AddTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

 const Todos = () => {
    
     const [todo, setTodo] = useState([]);

     const [status, setStatus] = useState(false);

    //add ---> Creating(add to db.json) //POST

     const handleAdd=(inputValue)=>{

         const newTodoItem={

             title : inputValue,
             status : false
         };
     

     let result = fetch("http://localhost:3000/todos", {

          method : "POST",
          headers : {
             "Content-Type" : "application/json"
          },
          body : JSON.stringify(newTodoItem), // object to json 
     });

       result.then(() => {

          //update DOM
          setStatus(!status)
       })
       result.catch((error) => {

          console.log(error)
           
          })

        };

        // GET ----> read from db.json

        async function fetchAndUpdateData(){

            try{

                 let response = await fetch("http://localhost:3000/todos");
                 let data = await response.json();

                  setTodo(data);
            }
            catch(error){
                console.log(error);
            }
        };

        // Delete ---> delete

        const handleDelete = (id) => {

             let result = fetch(`http://localhost:3000/todos/${id}`,{
                method : "DELETE",
             });
             
             result.then(() => {

                setStatus(!status)
             })
            
        };

        // Update ---> PATCH/PUT

        const handleToggle = (id, body) => {
           
            let result = fetch(`http://localhost:3000/todos/${id}`,{
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(body) //object to body
             });
             
             result.then(() => {
                setStatus(!status)
             })
        };

        useEffect(() => {

             fetchAndUpdateData();

        }, [status]);


     return (
        <>
        <AddTodo  handleAdd={handleAdd}/>

         {todo.map((item)=>{

              return (
 
                 <TodoItem key={item.id} {...item} handleDelete={handleDelete} 
                         handleToggle={handleToggle}/>

              )

         })}

        </>
     )

 };


  export default Todos; 