import armado1 from './img/armado1.png'
import armado2 from './img/armado2.png'
import armado3 from './img/armado3.png'
import armado4 from './img/armado4.png'

const products =[
    {
        id: "1",
        name: "Intel I3 - RX550",
        category: "equipoArmado",
        price:  700,
        img:
            armado1,
        stock: 10,                        
        },
    {
        id: "2",
        name: "AMD Ryzen 3 - Integrada",
        category: "equipoArmado",
        price:  560,
        img:
            armado2,
        stock: 10,                        
        },
    {
        id: "3",
        name: "AMD Ryzen 5 - GTX1650",
        category: "equipoArmado",
        price:  750,
        img:
            armado3,
        stock: 10,                        
        },
    {
        id: "4",
        name: "Intel I3 - RX6400",
        category: "equipoArmado",
        price:  850,
        img:
            armado4,
        stock: 10,                        
        },

]

export const getProducts =() => { 
    return new Promise((resolve)=> {
        setTimeout (()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductByID = (productId) =>{
    return new Promise((resolve) => {
       setTimeout(()=>{
        resolve(products.find(prod => prod.id === productId))
       }, 500) 
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
       setTimeout(()=>{
        resolve(products.filter(prod => prod.category === categoryId))
       }, 500) 
    })
}