import React from "react";
import { Form, redirect, useNavigation } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

  const newsLetterUrl = "https://www.course-api.com/cocktails-newsletter";

  export const action = async ({ request }) => {
     
       
       const formData = await request.formData();
     
       const data = Object.fromEntries(formData);
          
         try{
          const response = await axios.post(newsLetterUrl, data); 
             console.log(response);
              toast.success(response.data.msg);
               return redirect('/'); 
         }
          catch(error){
               console.log(error);
               toast.error(error?.message);
               toast.error(error?.data?.msg);
          }

            return null;
  };

const NewsLetter = () => {

     const navigation = useNavigation();

         const isSubmitting = navigation.state === "submitting";



     return <Form method="POST" className="form">
               <h4 style={{textAlign : "center", marginBottom : "2rem"}}>Our Newsletter</h4>
                {/* name */}
                <div className="form-row">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-input"
                   name="name" id="name" defaultValue="react" required />
                </div>

                 {/* LastName */}

                <div className="form-row">
                  <label htmlFor="lastName" className="form-label">LastName</label>
                  <input type="text" className="form-input"
                   name="lastName" id="lastName" defaultValue="js" required />
                </div>

                {/* email */}

                <div className="form-row">
                  <label htmlFor="email" className="form-label">email</label>
                  <input type="text" className="form-input"
                   name="email" id="email" defaultValue="rj@gmail.com" required />
                </div>

                  <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                      { isSubmitting ? "submitting..." : "submit"} 
                  </button>
            </Form>
    
};


  export default NewsLetter;