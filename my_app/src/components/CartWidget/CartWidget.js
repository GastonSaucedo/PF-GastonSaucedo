import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="carrito-compras">
            <FaCartShopping />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget
