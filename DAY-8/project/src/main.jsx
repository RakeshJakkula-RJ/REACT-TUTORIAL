 import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App'
import App2 from './App2'
import { ThemeContextProvider } from './Context/ThemeContextProvider'
import { AppContextProvider } from './Context/AppContextProvider'

createRoot(document.getElementById('root')).render(
  
  <ThemeContextProvider>
       <AppContextProvider>
                <App />
       </AppContextProvider>
  </ThemeContextProvider>
   
  
);
