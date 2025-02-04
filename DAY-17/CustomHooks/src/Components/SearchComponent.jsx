import React, { useEffect } from 'react'
import { useState } from 'react'
import useDebounce from '../Hooks/useDebounce';

const SearchComponent = () => {

     const [query, setQuery] = useState("");

     const debouncingQuery = useDebounce(query, 1000);

     useEffect(() => {
        if(debouncingQuery){
            // fetch or filter data based on debouncing query
            console.log(`search for : ${debouncingQuery}`);
        }
     }, [debouncingQuery]);

  return (
    
        <input type="text" placeholder="search..."
         onChange={(e) => setQuery(e.target.value)} value={query} />
    
  )
}

export default SearchComponent;