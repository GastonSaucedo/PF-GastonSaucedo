import "bulma/css/bulma.css"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ProfileCard from "./components/ProfileCard"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

import armado1 from "./img/armado1.png"
import armado2 from "./img/armado2.png"
import armado3 from "./img/armado3.png"
import armado4 from "./img/armado4.png"



function App() {
    return (
        <div className="App">
            <NavBar />


            <section className="hero is-primary fondo-hero">
                <div className="hero-body">
                    <h2 className="title">PRODUCTOS</h2>
                </div>
            </section>



            <div className="container">
                <div className="columns">
                    <div className="column is-3">
                        <ProfileCard titulo="Intel I3 - RX550" precio="$700" cat="EquipoArmado" img={armado1} />
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="AMD Ryzen 3 - RadeonGraphics" precio="$560" cat="EquipoArmado" img={armado2} />
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="AMD Ryzen 5 - GTX1650" precio="$750" cat="EquipoArmado" img={armado3} />
                    </div>
                    <div className="column is-3">
                        <ProfileCard titulo="Intel I3 - RX6400" precio="$850" cat="EquipoArmado" img={armado4} />
                    </div>
                </div>
            </div>

            <ItemListContainer greeting="Gracias por visitarnos" />
        </div>
    )
}

export default App