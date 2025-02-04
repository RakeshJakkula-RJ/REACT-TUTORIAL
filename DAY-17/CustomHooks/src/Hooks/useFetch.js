import { useEffect } from "react";
import { useState } from "react";

const useFetch = ( url ) => {

      const [ data, setData ] = useState(null);
    
      const [ loading, setLoading ] = useState(true);
    
      const [ error, setError ] = useState(null);
    
      
    
      useEffect(() => {
           
            setLoading(true);
    
             const fetchData = async () => {
                  try{
                     
                    const response = await fetch(url);
    
                    const data = await response.json();
    
                     console.log(data);
    
                      setData(data);
    
                      setLoading(false);
    
                  }
                  catch(error){
                      setError(error);
                  }
    
              };
    
              fetchData();
    
           }, [url]);
    
        return { data, loading, error};

    };

     export default useFetch;