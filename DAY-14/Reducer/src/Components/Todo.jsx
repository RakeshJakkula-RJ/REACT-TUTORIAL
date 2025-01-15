import React, { useReducer } from 'react';
import AddTodoItem from './AddTodoItem';
import TodoItem from './TodoItem';

 const initialTodos = [
     { id : 1, title : "learn react", status : false },
     { id : 2, title : "build todo", status : false },
     { id : 3, title : "learn useReducer", status : false } 
 ];


   const todoReducerFunction = (state, action) => {

         switch(action.type){
               case "ADD_TASK" : 
                  return [
                    ...state, 
                    {id:Date.now(), title : action.payload, status : false}
                ];

                case "UPDATE_TASK" : 
                       return state.map(task => 
                           task.id === action.payload ? {...task, status : !task.status } : task
                       );

                case "DELETE_TASK" :
                     return state.filter((task) => task.id !== action.payload);

                default :
                    return state;      
           } 
      };

const Todo = () => {

     const [todos, dispatch] = useReducer(todoReducerFunction, initialTodos);

      const updateTask = (id) => {
                
            dispatch({type : "UPDATE_TASK", payload : id} );

      };
 
      const deleteTask = (id) => {

          dispatch({type : "DELETE_TASK", payload : id} );

      };

       const addTask = ( title ) => {

           dispatch({type : "ADD_TASK", payload : title})

       };

       return (
        <div>
             <h1>Todo Items</h1>
              <AddTodoItem addTask={addTask}/>
             <ul>
                {todos.map((todo) => {
                   return (
                      <TodoItem key={todo.id} 
                                  todo={todo}
                                 updateTask={updateTask} 
                               deleteTask={deleteTask} /> 
                           )
                       })}
             </ul>
       </div>
    )
  };

export default Todo;