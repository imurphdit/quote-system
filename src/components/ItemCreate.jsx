import { useParams } from "react-router"
import items from '../assets/items.json'

const ItemCreate = () => {
    let params = useParams();
    const currentItem = items.find((item) => item.id === params.id)
  return (
    <>
        <div>Current URL ID: {params.id}</div>
        {currentItem
        ? (<div>Current Item: {currentItem.title} the category is {currentItem.category}</div>)
        : (<div>No item found</div>)}
    </>
  )
}

export default ItemCreate