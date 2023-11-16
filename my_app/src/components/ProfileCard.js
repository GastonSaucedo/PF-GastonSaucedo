


function ProfileCard(props) {

    const {titulo , precio} = props

    return (
        <div>
            <img alt="ImagenProducto"></img>
            <h3>{titulo}</h3>
            <p>{precio}</p>
        </div>
    )

}


export default ProfileCard