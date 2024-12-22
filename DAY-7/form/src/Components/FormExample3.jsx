import React from "react";
import { useRef } from "react";
import { useState } from "react";

const FormExample3 = () => {

    const [formData, setFormData] = useState(null);

    const formRef = useRef({

         name : null,
         place : null,
         gender : null

     }); 

      const handleSubmit = (event) => {

        event.preventDefault();

          const nameValue = formRef.current.name.value; 

          const placeValue = formRef.current.place.value; 

          const genderValue = formRef.current.gender.value; 

          setFormData({

               name : nameValue,
               place : placeValue,
               gender : genderValue

          });

          formRef.current.name.value = "";
          formRef.current.place.value = "";
          formRef.current.gender.value = "";

      };

        console.log(formData);
        
       console.log("render");

    return (

         <div>

              <form onSubmit={handleSubmit}>

                  <div><label htmlFor="">Name :</label>

                    <input type="text"  id="name"
                       ref={(element) => (formRef.current.name = element)} />

                  </div>

                  <div><label htmlFor="">Place :</label>

                    <input type="text"  id="place"
                      ref={(element) => (formRef.current.place = element)} />

                  </div>

                  <div><label htmlFor="">Gender :</label>

                    <select  id="gender" 
                     ref={(element) => (formRef.current.gender = element)} >

                         <option value="">Select Gender</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>

                    </select>

                  </div>

                 <button type="submit">Submit</button>

              </form> 
               
         </div>

         );

};

export default FormExample3;