 import { Header } from "./header.jsx/header"
import {Main} from "./components/Main.jsx"
import { Section } from "./components/Section.jsx"
import { SectionImg } from "./components/SectionImg.jsx"
 import { SectionCarrusell } from "./components/SectionCarrusell.jsx"
 
 
 
 export function App () {
  
   const nombre = 'Cabañas al Sur' 

    return (
      <body>
        <Header />
        <Main/>
        <Section  name= {nombre}/>
        <SectionImg />
        <SectionCarrusell />
      
      
      
      
      </body>
        
        

    )
    

}

