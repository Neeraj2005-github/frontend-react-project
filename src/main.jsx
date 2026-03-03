import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Demo1 from './demo/Demo1'
//import './index.css'
import App from './App.jsx'
import Demo2 from './demo/Demo2.jsx'  
import Demo3 from './demo/Demo3.jsx'
import Demo4 from  './demo/Demo4.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App /> 
    {  /* <Demo1/> */}

    {/*<Demo2/> */ }
     {/*  <Demo3/> */}
  {/*<Demo4/> */}
  
    </StrictMode>,
)
