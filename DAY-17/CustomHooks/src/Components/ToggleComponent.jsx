import React, { useState } from 'react';
import useToggle from '../Hooks/useToggle';

const ToggleComponent = () => {

//    const [ isToggle, setIsToggle ]  = useState(true);
      
      const [ isVisible, toggleVisible ] = useToggle();
       
  return (
    <div>
        <button onClick={toggleVisible}>

            { isVisible ? "hide" : "show" } Content
        </button>

         { isVisible && <p>this is toggle conent!</p>}
    </div>
  )

}

export default ToggleComponent;