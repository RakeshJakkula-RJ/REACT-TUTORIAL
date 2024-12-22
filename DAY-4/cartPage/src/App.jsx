import React from 'react'
import { useState } from 'react';
import Timer from './Components/Timer';



   const App = () => {

   const [showTimer, setShowTimer] = useState(true);
     
      return <div>
          
          {showTimer &&  <Timer />}

          <button onClick={() => setShowTimer(!showTimer) }>
             {showTimer ? "Hide Timer" : "show Timer " }</button>

      </div>
   };

   export default App;