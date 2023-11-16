import NavBar from "./components/NavBar/NavBar"

import ProfileCard from "./components/ProfileCard"

import "./App.css"


function App() {
    return (
        <div className="App">
            <NavBar />
            {/* <ItemListContainer/> */}
            <h2>PRODUCTOS</h2>
            <div>
                <ProfileCard titulo="Intel I3 - RX550" precio="$700" cat="EquipoArmado" />
                <ProfileCard titulo="Intel I3 - RX6400" precio="$850" cat="EquipoArmado" />
                <ProfileCard titulo="AMD Ryzen 5 - GTX1650" precio="$750" cat="EquipoArmado" />
                <ProfileCard titulo="AMD Ryzen 3 - RadeonGraphics" precio="$560" cat="EquipoArmado" />
            </div>
        </div>
    )
}

export default App