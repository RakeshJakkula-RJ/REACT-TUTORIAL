import React, { useState } from 'react'

const AddTodoItem = ({ addTask }) => {

     const [title, setTitle] = useState();

      const handleAdd = () => {

         addTask(title);
          setTitle('');
      };

  return (
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
         <button onClick={handleAdd}>ADD</button>
      </div>
  )
}

export default AddTodoItem