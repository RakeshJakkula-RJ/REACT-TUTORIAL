
import React from "react";

export const Button = (props) => {
//   console.log(props);

 const {buttonText, backGroundColor, click} = props; // js // destructuring

    return (
        
        <button style={{
            backgroundColor : backGroundColor
            }}
            onClick={click}
            >
            {buttonText}
        </button>
    )
};

export default Button;