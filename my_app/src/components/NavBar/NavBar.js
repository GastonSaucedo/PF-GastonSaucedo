import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import "bulma/css/bulma.css"

import {NavLink, Link} from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <Link to = '/'><h3>E-Commerce</h3></Link>
            
            <div className="categorias">
                <NavLink to='/'><button className="{({isActive})}" >Todo</button></NavLink>                
                <NavLink to={`/category/equipoArmado`} className="{({isActive})}">Equipos Armados</NavLink>
                <NavLink to={`/category/consolas`} className="{({isActive})}">Consolas</NavLink>
                <NavLink to={`/category/juegos`} className="{({isActive})}">Juegos</NavLink>

            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar