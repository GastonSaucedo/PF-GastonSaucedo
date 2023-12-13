import "bulma/css/bulma.css"
import NavBar from "./components/NavBar/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (





        <div className="App">

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={< ItemDetailContainer />} />
                    <Route path="*" element={<h1>ERROR 404 PAGINA NO ENCONTRADA</h1>} />
                </Routes>
            </BrowserRouter>








        </div>
    )
}

export default App