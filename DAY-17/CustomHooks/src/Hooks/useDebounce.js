import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {

     // returns a value 
     const [debounceValue, setDebounceValue] = useState(value);

     useEffect(() => {
      const id =  setTimeout(() => 
               setDebounceValue(value), delay);
            return () => clearTimeout(id);

     }, [value, delay]);
      
      return debounceValue;
      
  };

   export default useDebounce;
