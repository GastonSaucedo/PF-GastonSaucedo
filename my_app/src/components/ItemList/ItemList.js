import Item from '../Item/Item'
import "bulma/css/bulma.css"
import "./ItemList.css"

const ItemList = ({ products }) => {
  return (
    <div className='container'>
      <div className="ListGroup columns">
        {products.map(prod => <Item key={prod.id}{...prod} />)}
      </div>

    </div>


  )
}

export default ItemList