import { useState } from "react";
import "bulma/css/bulma.css"

const contadorItem = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if (quantity >1){
            setQuantity(quantity-1)
        }
    }
    
    return (
        <div className="contador">
            <div className="controles">
                <button className="boton-contador" onClick={decrement}>-</button>
                <p className="cantidad">{quantity}</p>
                <button className="boton-contador" onClick={increment}>+</button>
            </div>
            <div>
                <button className="boton-agregar-carrito" onClick={()=> onAdd(quantity)} disabled={!stock}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}


export default ItemCount