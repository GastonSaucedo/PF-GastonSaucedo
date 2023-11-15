// 1) Importar librerias React y ReactDOM

import React from "react"
// Define que es un componente y como los componentes funcionan juntos

import ReactDOM from "react-dom/client"
// sabe como hacer que un componente aparezca en la pantalla del usuario


// 2) Obtener una referencia al div con id= root
const el = document.getElementById("root")

// 3) Le decimos a react que tome control del elemento
const root = ReactDOM.createRoot(el)

// 4) Creamos un componente 
function App(){
    return <h1>Hola desde react</h1>
}

// 5) Mostrar el componente en la pantalla del usuario
root.render(<App/>)