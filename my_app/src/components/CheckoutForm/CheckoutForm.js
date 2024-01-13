import { useState } from "react"
import Checkout from "../Checkout/Checkout"
import './CheckoutForm.css'


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    return (

        <div className="formulario">
            <form onSubmit={handleConfirm} method="post">
            <h2 className="nombreCheckout">Checkout</h2>
            <h3 className="textoCheckout">Rellene este formulario con sus datos</h3>
            <div className="valorForm">
                <label>Nombre: </label>
                <input className="entrada" type="text" required value={name} onChange={({ target }) => setName(target.value)} />
            </div>

            <div className="valorForm">
                <label>Numero:</label>
                <input className="entrada" type="text" required value={phone} onChange={({ target }) => setPhone(target.value)} />
            </div>

            <div className="valorForm">
                <label>Email:</label>
                <input className="entrada" type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
            </div>
            <input type="submit" value="Crear compra" className="button botonForm is-primary"/>
        </form>
        </div>

    )
}

export default CheckoutForm;