// import React, { useReducer } from "react";

// const initialArg = 0;

// const reducerFunction = (state, action) => {
//   if (action.type === "INC_COUNT") {
//     console.log("increment");
//     state = state + action.payload;
//     return state;
//   }
//   if (action.type === "DEC_COUNT") {
//     state = state - 1;
//     return state;
//   }
//   if (action.type === "RESET_COUNT") {
//     state = 0;
//     return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducerFunction, initialArg);

//   return (
//     <>
//       <div>
//         <h1> counter:{state}</h1>

//         <button
//           onClick={() => {
//             dispatch({ type: "INC_COUNT", payload: 2 });
//           }}
//           // onClick={handleIncrement}
//         >
//           increment
//         </button>
//         <button
//           onClick={() => {
//             dispatch({ type: "DEC_COUNT" });
//           }}
//         >
//           decrement
//         </button>
//         <button
//           onClick={() => {
//             dispatch({ type: "RESET_COUNT" });
//           }}
//         >
//           reset
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import Todo from "./Components/Todo";


const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;