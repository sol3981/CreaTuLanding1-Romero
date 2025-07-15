import {Link} from "react-router-dom";
import { ItemListConteiner } from "./ItemListConteiner";


export function Home (){
   

    return (
        <div>
         <button><Link to= "/productos">Nuestros Productos</Link></button> 
       </div>

    )
}
