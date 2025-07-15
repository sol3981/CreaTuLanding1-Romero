import { NavLink } from "react-router-dom";
export function NavBar () {
    return (
    <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/nosotros">Nosotros</NavLink>
         <NavLink to="/carrito">Carrito</NavLink>
   </nav>
   )
}