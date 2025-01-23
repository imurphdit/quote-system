import { useParams } from "react-router"
import items from '../assets/items.json'
import Item from './Item'
import Colors from "./Colors";
import './ItemCreate.css'
import { useState } from "react";
import ColorSizing from "./ColorSizing";


const ItemCreate = () => {
    let params = useParams();

    const currentItem = items.find((item) => item.id === params.id)

    const [colorList, setColorList] = useState([]);


    // ADD CLICK STATE
    const handleAddColor = (color) => {

      if(colorList.includes(color)){
        const newColorList = colorList.filter(currentColor => currentColor !== color);
        setColorList(newColorList)
        
      } else {
        setColorList([...colorList, color]);
      }
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

          <div className="colors-grid">
            {currentItem.colors.map((color) => (
              <Colors
              color={color}
              key={color}
              onClick={handleAddColor}
              className={colorList.includes(color) ? "selected" : ""}
              />
            ))}
          </div>

            {/* List of Selected Color Styles */}
            {colorList.map((color) => (
              <ColorSizing color={color} key={color}/>
            ))}
            
            
        </>
        )
        : (<div>No item found</div>)}
    </>
  )
}

export default ItemCreate