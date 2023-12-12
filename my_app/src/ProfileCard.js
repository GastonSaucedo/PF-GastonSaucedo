
import "bulma/css/bulma.css"


function ProfileCard(props) {
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

                </div>
            </div>
        </div>
    )

}


export default ProfileCard