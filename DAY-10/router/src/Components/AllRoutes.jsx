import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Users from "../Pages/Users";
import SingleUserPage from "../Pages/SingleUserPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

const AllRoutes = () => {

     return (
        <Routes>  
             <Route path="/" element={ <Home /> }/>

             <Route path="/about" element={ <About /> }/>

             <Route path="/cart" element={ <Cart /> }/>

             <Route path="/users" element={
                <PrivateRoute>
                  <Users />
                 {/* children */}
                </PrivateRoute>
                }/>

             <Route path="/users/:id" element={ 
                 <PrivateRoute>
                    <SingleUserPage /> 
                 </PrivateRoute>
              }/>
            
             <Route path="/login" element={ <Login /> }/>

             <Route path="*" element={ <NotFound /> }/>
        </Routes>
     );

};


  export default AllRoutes;