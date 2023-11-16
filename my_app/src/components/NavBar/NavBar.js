import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <h3>E-Commerce</h3>
            <div >
                <button className="categorias">Ver Todo</button>
                <button className="categorias">Equipos Armados</button>
                <button className="categorias">Consolas</button>
                <button className="categorias">Juegos</button>

            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar