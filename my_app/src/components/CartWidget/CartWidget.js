import { FaCartShopping } from "react-icons/fa6";


function CartWidget() {
    return (
        <button className="carrito-compras">
            <FaCartShopping/>
            <span>0</span>
        </button>
    )
}

export default CartWidget
