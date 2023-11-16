import cart from "./assets/cart.svg"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <h3>E-Commerce</h3>
            <div>
                <button>Ver Todo</button>
                <button>Equipos Armados</button>
                <button>Consolas</button>
                <button>Juegos</button>

            </div>
            <div className="carrito-compras">
                <img src={cart} alt="cart-widget"/>              
                <span>0</span>
            </div>

        </nav>
    )
}

export default NavBar