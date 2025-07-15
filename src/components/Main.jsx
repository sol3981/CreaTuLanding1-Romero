import {Routes, Route} from "react-router-dom"
import { Home } from "./Home"
import { ItemListConteiner } from "./ItemListConteiner"
import {ItemList } from "./ItemList"
import { Item } from "./Item.jsx"
import {ItemDetailConteiner} from "./ItemDetailContainer.jsx"
import { CartWidget } from "./CartWidget.jsx"


export function Main ({name}){
  return (
    <main className="contMain conteiner-fluid">
     <Routes>
      <Route path="/"  element= {<Home/>}  />      
      <Route path="/nosotros"  element= {<h1>Nosotros</h1>} />
      <Route path="/contacto"  element= {<h1>Contacto</h1>} />
      <Route path="/productos"  element= {<ItemListConteiner/>}  /> 
      <Route path ="/productos/:id" element= {<ItemList />} />
      <Route path ="/item/:id" element= {<Item />} />
      <Route path ="/detalles/:id" element= {<ItemDetailConteiner />} />
      <Route path ="/carrito" element= {<CartWidget />} />
     </Routes>

      
      
    </main>
  )
    
}
