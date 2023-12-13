import { Link } from "react-router-dom";
import "bulma/css/bulma.css"
import "./Item.css"



const Item = ({ id, name, img, price, stock }) => {
    return (


        <article className="column is-3">
            <section className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={img} alt={name} />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{name}</p>
                    <p className="subtitle is-6">${price}</p>
                    <p className="subtitle is-6">stock disponible: {stock}</p>
                    <Link to={`/item/${id}`}><button className="boton">VER DETALLES</button></Link>
                </div>

            </section>
        </article>


    )
}

export default Item