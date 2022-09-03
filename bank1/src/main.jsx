import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App'
import './index.css'
import StepContext from './context/StepContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     < BrowserRouter>
    <StepContext>
   
    <App />
   
    </StepContext>
    </BrowserRouter>
  </React.StrictMode>
)
