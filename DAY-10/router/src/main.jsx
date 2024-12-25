
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { AuthContext, AuthContextProvider } from './Context/AuthContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  
   <AuthContextProvider>
        <BrowserRouter>
             <App />
       </BrowserRouter>
   </AuthContextProvider>

);
