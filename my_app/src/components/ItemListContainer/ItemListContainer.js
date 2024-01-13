import "bulma/css/bulma.css"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId
        ?query(collection(db, 'productos'), where('category', '==', categoryId))
        : collection(db, 'productos')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })


    }, [categoryId])

    return (
        <div>

            <ItemList products={products} />

        </div>
    )
}
export default ItemListContainer;