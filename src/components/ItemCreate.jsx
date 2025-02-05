import { useParams } from "react-router";
import items from "../assets/items.json";
import Item from "./Item";
import Colors from "./Colors";
import "./ItemCreate.css";
import { useState } from "react";
import ColorSizing from "./ColorSizing";
import PrintMethod from "./PrintMethod";

const ItemCreate = () => {
  //LOCATES CURRENT ITEM VIA URL ID
  let params = useParams();
  const currentItem = items.find((item) => item.id === params.id);

  // USE STATES
  const [orderInfo, setOrderInfo] = useState({
    Item: currentItem.title,
    Sizes: {},
    "Printing Areas": {},
  });

  const handleAddColor = (color) => {
    if (color in orderInfo.Sizes) {
      const newList = { ...orderInfo };
      delete newList.Sizes[color];
      console.log(color + " deleted");
      setOrderInfo(newList);
    } else {
      setOrderInfo((prev) => ({
        ...prev,
        Sizes: { ...prev.Sizes, [color]: { S: "", M: "", L: "", XL: "" } },
      }));
      console.log(color + " added");
    }
  };

  const addPrintArea = (area) => {
    if (area in orderInfo["Printing Areas"]){
      const newList = {...orderInfo}
      delete newList["Printing Areas"][area]
      setOrderInfo(newList)
    } else {
      setOrderInfo((prev) => ({
        ...prev, "Printing Areas": {...prev["Printing Areas"], [area]: {Method: "", Size: "", }}
      }))
    }
  }


  const addPrintMethod = (area, method) => {
    console.log("Area: " + area + " Method: " + method);
    const currentMethod = orderInfo["Printing Areas"][area]['Method'];
    
    if(Object.is(currentMethod, method)){
      setOrderInfo((prev) => ({...prev, "Printing Areas": {...prev["Printing Areas"], [area]: {...prev["Printing Areas"][area], 'Method': ''}}}))
    } else {
      setOrderInfo((prev) => ({...prev, "Printing Areas": {...prev["Printing Areas"], [area]: {...prev["Printing Areas"][area], 'Method': method}}}))
    }
  }

  const handleSizeChange = (color, size, value) => {
    setOrderInfo((prev) => ({...prev, Sizes: {...prev.Sizes, [color]: { ...prev.Sizes[color], [size]: value }}}))
  };

  return (
    <>
      <div>Current URL ID: {params.id}</div>
      {currentItem ? (
        <>
          <div>
            Current Item: {currentItem.title} the category is{" "}
            {currentItem.category} Testing: {currentItem.colors[1]}
          </div>

          <Item
            title={currentItem.title}
            img={currentItem.img}
            className='item'
          />

          <div className='colors-grid'>
            {currentItem.colors.map((color) => (
              <Colors
                color={color}
                key={color}
                onClick={handleAddColor}
                className={color in orderInfo.Sizes ? "selected" : ""}
              />
            ))}
            <pre>{JSON.stringify(orderInfo, null, '\t')}</pre>
          </div>

          {/* Sizing of Selected Color Styles */}
          {Object.keys(orderInfo.Sizes).map((color) => (
            <ColorSizing
              color={color}
              key={color}
              handleSizeChange={handleSizeChange}
              sizeValues={orderInfo.Sizes}
            />
          ))}

          {['front', 'back', 'left shoulder', 'right shoulder'].map((item) => (
            <Colors
            key={item}
            color={item}
            onClick={addPrintArea}
            className={item in orderInfo["Printing Areas"] ? "selected" : ""}
            />
          ))}

          {Object.keys(orderInfo["Printing Areas"]).map((area) => (
            <PrintMethod
              key={area}
              printArea={area}
              addMethod={addPrintMethod}
            />
          ))}
        </>
      ) : (
        <div>No item found</div>
      )}
    </>
  );
};

export default ItemCreate;
