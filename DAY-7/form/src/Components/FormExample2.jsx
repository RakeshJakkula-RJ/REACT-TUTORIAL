
import React from "react";
import { useState } from "react";

let initialValue = {

      userName : "",
      country : "",
      isMarried : "",
      favColors : [
         {color : "Red", checked : false},
         {color : "Black", checked : false},
         {color : "Blue", checked : false}
      ]
        
   };
 
const FormExample2 = () => {

    const [formState, setFormState] = useState(initialValue);

     const handleChange = (event, index) => {
        
        const { name, value, checked } = event.target;

           if(name === "favColors"){

             const newFavColors = [...formState.favColors];

               newFavColors[index].checked = checked;

               setFormState({...formState, favColors : newFavColors});

           }
         else{

            setFormState({...formState, [name] : value});

            };

     };

     const handleSubmit = (event) => {

         event.preventDefault();
            console.log(formState);

            setFormState(initialValue);

     };

   return (
      <div>

         <form action="submit" onSubmit={handleSubmit}>

            <input type="text" placeholder="userName" onChange={handleChange}
                   name="userName" value={formState.userName}/>

            <select  id="" onChange={handleChange} name="country" value={formState.country}> 

                 <option value="">select country</option>
                 <option value="india">India</option>
                 <option value="australia">Australia</option>
                 <option value="england">England</option>

            </select>

                <label htmlFor="" >
                <input type="radio" onChange={handleChange} value="yes"  
                name="isMarried" checked={formState.isMarried === "yes"}/>
                   yes 
                </label>

                <label htmlFor="" >
                <input type="radio" onChange={handleChange} value="no" 
                 name="isMarried" checked={formState.isMarried === "no"} />
                   no
                </label>
 
                      <br />

                      {formState.favColors.map((colorObj, index) => {

                           return (

                             <label key={index}>

                                <input type="checkbox"  name="favcolor" 
                                   checked={colorObj.checked} 
                                 onChange={(event) => handleChange(event, index)}/>

                                     {colorObj.color}

                              </label>
                           )
                      })}
 
                <input type="submit" />

         </form>

      </div>
      );

};

 export default FormExample2;