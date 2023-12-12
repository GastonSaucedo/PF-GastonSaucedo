import { useState } from "react"


function ProfileCard(props) {

    const { titulo, precio, img } = props

    const [count, setCount] = useState(0)


    function handleClickSuma() {
        setCount (count + 1)
    }
    function handleClickResta() {
        if (count > 0 ) {
            setCount (count - 1)
        }
        
    }

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt="ImagenProducto" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-6">{titulo}</h3>
                    <p className="subtitle is-7">{precio}</p>
                </div>
                <div className="card-footer columns">
                    <div className="column">
                    <button onClick={handleClickResta} className="button is-light is-fullwidth">-</button>
                    </div>
                    <div className="column">
                    <p className="">{count}</p>
                    </div>
                    <div className="column">
                    <button onClick={handleClickSuma} className="button is-light is-fullwidth">+</button>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    )

}


export default ProfileCard