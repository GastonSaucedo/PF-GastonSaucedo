import { useState } from "react"
import "bulma/css/bulma.css"
import "./ItemCount.css"


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="contador" >
            <div className="controles">
                <button className="button is-primary " onClick={decrement}>-</button>
                <h4 className="Number">{quantity} </h4>
                <button className="button is-primary " onClick={increment}>+</button>
            </div>
            <div className="agregar-carrito">
                <button className="button is-primary  " onClick={() => onAdd(quantity)} disabled={!stock}>Agregar el carrito</button>
            </div>
        </div>

    )
}

export default ItemCount