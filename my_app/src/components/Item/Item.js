import { Link } from "react-router-dom";
import "bulma/css/bulma.css"
import "./Item.css"



const Item = ({ id, name, img, price, stock }) => {
    return (


            <section className="tarjeta">
                <div className="imagen-tarjeta">
                    <figure className="image">
                        <img src={img} alt={name} />
                    </figure>
                </div>
                <div className="contenido">
                    <p className="title">{name}</p>
                    <p className="subtitle">${price}</p>
                    <p className="subtitle">stock disponible: {stock}</p>
                    <Link to={`/item/${id}`}><button className="boton">VER DETALLES</button></Link>
                </div>

            </section>

    )
}

export default Item