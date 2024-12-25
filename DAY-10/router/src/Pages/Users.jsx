import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Users= () => {
   
  const [data, setData] = useState([]);

    async function fetchingData(){

         try{

              let response = await fetch('https://reqres.in/api/users?page=2');

              let data = await response.json();
         
              setData(data.data || [ ]); 
           }
           catch(error){
             console.log(error);
           }
      
      }; 

      useEffect(() => {
          
           fetchingData();

      }, []); 

                return (
                    <div>
                       <>
                         <h1>Users page</h1>
                             {
                             data.map((user) => {
                                return <div key={user.id} style={{border : "1px solid white", margin:"10px" }}>
                                    <img src={user.avatar} alt="" />

                                      <Link to={`${user.id}`}>

                                         {user.first_name}
                                      </Link>
                                 </div>
                           }) 
                        }
                      </>
                  </div>
                   )

};
 
 
  export default Users;