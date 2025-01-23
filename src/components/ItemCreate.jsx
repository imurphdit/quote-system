import { useParams } from "react-router"
import items from '../assets/items.json'
import Item from './Item'
import Colors from "./Colors";
import './ItemCreate.css'
import { useState } from "react";


const ItemCreate = () => {
    let params = useParams();
    const currentItem = items.find((item) => item.id === params.id)

    const [colorList, setColorList] = useState([]);

    const handleAddColor = (color) => {
      setColorList([...colorList, color]);
    }

  return (
    <>
        <div>Current URL ID: {params.id}</div>
        {currentItem
        ? (
        <>
          <div>Current Item: {currentItem.title} the category is {currentItem.category} Testing: {currentItem.colors[1]}</div>
          <Item
            title={currentItem.title}
            img={currentItem.img}
            className='item'/>
          <Colors
            colors={currentItem.colors}
            onClick={handleAddColor}/>
            <div>
              {colorList.map((color) => (
                <p key={color}>{color}</p>
              ))}
            </div>
        </>
        )
        : (<div>No item found</div>)}
    </>
  )
}

export default ItemCreate