import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
   
export function Main(){

  return(<main>
    <div>
      <h1>Bienvenidos a <br />
         Cabañas del Sur
        </h1>
    </div>




  </main>




  )

}