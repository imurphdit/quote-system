import { useParams } from "react-router"
import items from '../assets/items.json'
import Item from './Item'
import Colors from "./Colors";
import './ItemCreate.css'


const ItemCreate = () => {
    let params = useParams();
    const currentItem = items.find((item) => item.id === params.id)
  return (
    <>
        <div>Current URL ID: {params.id}</div>
        {currentItem
        ? (<div>Current Item: {currentItem.title} the category is {currentItem.category} Testing: {currentItem.colors[1]}</div>)
        : (<div>No item found</div>)}
        <Item
        title={currentItem.title}
        img={currentItem.img}
        className='item'/>
        <Colors
        colors={currentItem.colors}
        />

    </>
  )
}

export default ItemCreate