import React from "react";

 const TodoItem = ({id, title, status, handleDelete, handleToggle}) => {

    function handleUpdate(){

         const body = {status : !status };

         handleToggle(id, body)

    }; 

     return <div style={{border : "1px solid  white", 
                            margin : "10px", 
                           display : "flex", 
                           gap : "10px",
                     justifyContent : "space-between" }}>

           <p>{title}</p>
           <p>{status? "completed" : "not completed"}</p>
           <button onClick={()=>handleDelete(id)}>Delete</button>
           <button onClick={()=>handleUpdate(id)}>Toggle</button>
        </div>

 };

  export default TodoItem