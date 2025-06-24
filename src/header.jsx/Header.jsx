import { App } from "../App";

export function Header () {
    return (
      <header className="header">          
        <div  className="navbar fixed-top conteiner-fluid">   

          <div id = "header-btn" className="header-btn d-flex fixed-top  justify-content-end">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
            </button>
            <ul class="dropdown-menu">
              <li><button className="dropdown-item" type="button">Complejo</button></li>
              <li><button className="dropdown-item" type="button">Cabañas</button></li>
              <li><button className="dropdown-item" type="button">Galería</button></li>
              <li><button className="dropdown-item" type="button">Contacto</button></li>
            </ul>
          </div>

          <div className= "header-img fixed-top justify-content-end">
            <a className="navbar-brand" href= "../index.html">
              <img className="logo-img "  src="../src/assets/img/Logotipo-cabañas-alsur.png" alt="Imagen del Logo" />
            </a>

          </div>
        </div>
      </header>               
          
        
    )
   
}