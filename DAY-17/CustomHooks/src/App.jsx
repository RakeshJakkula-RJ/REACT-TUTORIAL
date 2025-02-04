// import React, { useEffect, useState } from 'react';
// import useFetch from './Hooks/useFetch';

// const App = () => {

//   const url = "https://fakestoreapi.com/products";

//     const { data, loading, error } =  useFetch(url);

//        if(loading){
//          return <p>Loadfing....</p>
//        }
//        if(error){
//          return <p>Error : {error}</p>
//        }

//    return (
//       <ul>
//          {data.map(item => <li key={item.id}>{ item.category}</li>)}
//       </ul>

//     )
//  }

//   export default App;


  import React from 'react'
import ToggleComponent from './Components/ToggleComponent'
import SearchComponent from './Components/SearchComponent'
  
  const App = () => {
    // return  <ToggleComponent />
    return <SearchComponent />
  }
  
  export default App