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
    const [sizeValues, setSizeValues] = useState({});


    // ADD CLICK STATE
    const handleAddColor = (color) => {

      if(colorList.includes(color)){
        const newColorList = colorList.filter(currentColor => currentColor !== color);
        setColorList(newColorList)
        delete sizeValues[color]

      } else {
        setColorList([...colorList, color]);

        // Init Size Values for Color
        setSizeValues((prev) => ({
          ...prev, [color]: prev[color] || { S: "", M: "", L: "", XL: ""},
        }))
      }
    }

    const handleSizeChange = (color, size, value) => {
      setSizeValues((prev) => ({
        ...prev,
        [color]: {
          ...prev[color],
          [size]: value,
        }
      }))
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
            <div>
              {JSON.stringify(sizeValues)}
            </div>
          </div>

            {/* Sizing of Selected Color Styles */}
            {colorList.map((color) => (
              <ColorSizing color={color} key={color} handleSizeChange={handleSizeChange} sizeValues={sizeValues}/>
            ))}
            
            
        </>
        )
        : (<div>No item found</div>)}
    </>
  )
}

export default ItemCreate