import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import {useContext, useState } from "react"
import { Link } from 'react-router-dom'

import { CartContext } from "../../context/CartContext"



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)

    }

    return (
        <div className="detallesTarjeta">
            <article className="CardItem">
                <header className="Header">
                    <picture>
                        <img src={img} alt={name} className="ItemImg" />
                    </picture>

                </header>

                <section className="ItemDetails">
                    <h2 className="ItemName">
                        {name}
                    </h2>
                    <p className="Info">
                        Descripcion: <br />{description}
                    </p>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                    <footer className="ItemFooter">
                        {
                            quantityAdded > 0 ? (
                                <h3>Producto agregado al carrito</h3>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }


                    </footer>
                    <div>
                        <Link to='/' className="button is-primary">Volver</Link>
                    </div>
                </section>
            </article>
        </div>

    )
}

export default ItemDetail