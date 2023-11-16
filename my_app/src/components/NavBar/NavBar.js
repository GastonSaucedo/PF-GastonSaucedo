import cart from "./assets/cart.svg"
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
            <button className="carrito-compras">
                <img src={cart} alt="cart-widget"/>              
                <span>0</span>
            </button>

        </nav>
    )
}

export default NavBar