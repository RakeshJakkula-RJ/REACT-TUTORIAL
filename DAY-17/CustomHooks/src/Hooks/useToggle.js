import { useState } from "react"

 const useToggle = (initialValue = false) => {

    const [ isToggle, setIsToggle ] = useState(initialValue);

    const toggle= () => {
       setIsToggle(!isToggle);
    }

     return [ isToggle, toggle ];

 };


    export default useToggle;