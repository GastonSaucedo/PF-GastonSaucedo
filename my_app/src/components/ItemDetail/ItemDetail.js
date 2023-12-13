import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <div className="tarjeta">
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
                        Descripcion: <br/>{description}
                    </p>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                    <div className="ItemCounter"><ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad Agregada", quantity)} /></div>
                </section>
            </article>
        </div>
    )
}

export default ItemDetail