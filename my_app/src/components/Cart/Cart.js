import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="sinProductos">
                <h2>No hay items en el carrito</h2>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div className="carrito">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <div className="botonesCarrito">
                <button onClick={() => clearCart()} className="button botonCarrito is-primary">Vaciar carrito</button>
                <Link to='/checkout' className="button botonCarrito is-primary">Finalizar Compra</Link>
            </div>
            <div>
                <Link to='/' className="button is-primary">Volver</Link>
            </div>
        </div>
    )


}

export default Cart