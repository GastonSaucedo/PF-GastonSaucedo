import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css"
import { FaCircleXmark } from "react-icons/fa6"

const CartItem = ({ name, price, id, quantity }) => {

    const { removeItem } = useContext(CartContext)


    return (
        <div className="productosAgregados">
            <h2 >{name}</h2>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${price * quantity}</p>
            <button onClick={() => removeItem(id)} className="botonX"><FaCircleXmark /></button>
        </div>
    )
}

export default CartItem;