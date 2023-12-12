import "bulma/css/bulma.css"

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <div className="card" />
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>

            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}

                </p>
            </section>
            <footer className="ItemFooter">
                <link to={`/item/${id}`} className="option"> ver detalle</link>
            </footer>
            <div />
        </article>
    )
}

export default Item