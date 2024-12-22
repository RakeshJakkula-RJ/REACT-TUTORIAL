import React from "react";

const QuantityContainer = ({quantity, id, changeQuantity}) => {

     return (
        <div style={{display: "flex", gap:"5px" }}>
          <button onClick={()=>changeQuantity(id, -1)}>-</button> 
                { /* callback function */}
                 <p>{quantity}</p>
          <button onClick={()=>changeQuantity(id, +1)}>+</button>
              {/* callback function */} 
     </div>
     );
};

export default QuantityContainer;