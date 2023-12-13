import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import "bulma/css/bulma.css"

import {NavLink, Link} from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <Link to = '/'><h3>E-Commerce</h3></Link>
            
            <div className="Categories">
                             
                <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } > <button className="categorias"> Todo </button> </NavLink>
                <NavLink to={`/category/equipoArmado`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } > <button className="categorias"> Equipos Armados </button> </NavLink>
                <NavLink to={`/category/consolas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } > <button className="categorias"> Consolas </button> </NavLink>
                <NavLink to={`/category/juegos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } > <button className="categorias"> Juegos </button> </NavLink>


            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar