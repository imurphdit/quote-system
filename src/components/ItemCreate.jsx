import { useParams } from "react-router";
import items from "../assets/items.json";
import Item from "./Item";
import { useState } from "react";
import ColorSizing from "./ColorSizing";
import PrintMethod from "./PrintMethod";
import Button from "./Button";

const ItemCreate = () => {
  //LOCATES CURRENT ITEM VIA URL ID
  let params = useParams();
  const currentItem = items.find((item) => item.id === params.id);

  // USE STATES
  const [orderInfo, setOrderInfo] = useState({
    Item: currentItem ? currentItem.title : null,
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
    if (area in orderInfo["Printing Areas"]) {
      const newList = { ...orderInfo };
      delete newList["Printing Areas"][area];
      setOrderInfo(newList);
    } else {
      setOrderInfo((prev) => ({
        ...prev,
        "Printing Areas": {
          ...prev["Printing Areas"],
          [area]: { Method: "" },
        },
      }));
    }
  };

  const addPrintMethod = (area, method) => {
    console.log("Area: " + area + " Method: " + method);
    const currentMethod = orderInfo["Printing Areas"][area]["Method"];

    if (Object.is(currentMethod, method)) {
      setOrderInfo((prev) => ({
        ...prev,
        "Printing Areas": {
          ...prev["Printing Areas"],
          [area]: { Method: "" },
        },
      }));
    } else {
      setOrderInfo((prev) => ({
        ...prev,
        "Printing Areas": {
          ...prev["Printing Areas"],
          [area]: { Method: method },
        },
      }));
    }
  };

  const handleSizeChange = (color, size, value) => {
    setOrderInfo((prev) => ({
      ...prev,
      Sizes: {
        ...prev.Sizes,
        [color]: { ...prev.Sizes[color], [size]: value },
      },
    }));
  };

  const addMethodArgs = (method, area, value) => {
    if (method === "screenprint") {
      setOrderInfo((prev) => ({
        ...prev,
        "Printing Areas": {
          ...prev["Printing Areas"],
          [area]: { ...prev["Printing Areas"][area], "Ink Colors": value },
        },
      }));
    } else if (method === "embroidery") {
      setOrderInfo((prev) => ({
        ...prev,
        "Printing Areas": {
          ...prev["Printing Areas"],
          [area]: { ...prev["Printing Areas"][area], Size: value },
        },
      }));
    } else {
      console.log("Something fucked up while adding argument to print methods");
      console.log(method);
      console.log(area);
      console.log(value);
    }
  };

  return (
    <div className="flex flex-col">
      <div>Current URL ID: {params.id}</div>
      {currentItem ? (
        <>
            <pre className='fixed left-10 top-10 border-1 bg-gray-500'>
              {JSON.stringify(orderInfo, null, "\t")}
            </pre>
          <div className="max-w-2xs text-center self-center">
            <Item title={currentItem.title} img={currentItem.img} className='' />
          </div>
          <div className='flex flex-row gap-2 self-center cursor-pointer'>
            {currentItem.colors.map((color) => (
              <Button
                name={color}
                key={color}
                onClick={handleAddColor}
                className={color in orderInfo.Sizes ? "bg-gray-500" : ""}
                divClass='border-1 p-1'
              />
            ))}
          </div>
          {/* Sizing of Selected Color Styles */}
          <div className="self-center">
            {Object.keys(orderInfo.Sizes).map((color) => (
              <ColorSizing
                color={color}
                key={color}
                handleSizeChange={handleSizeChange}
                sizeValues={orderInfo.Sizes}
              />
            ))}
          </div>
          <div className='flex flex-row gap-2 mt-5 self-center cursor-pointer'>
            {["front", "back", "left shoulder", "right shoulder"].map(
              (item) => (
                <Button
                  key={item}
                  name={item}
                  onClick={addPrintArea}
                  className={
                    item in orderInfo["Printing Areas"] ? "bg-gray-500" : ""
                  }
                  divClass='border-1 p-1'
                />
              )
            )}
          </div>
          <div className="self-center cursor-pointer">
            {Object.keys(orderInfo["Printing Areas"]).map((area) => (
              <PrintMethod
                key={area}
                printArea={area}
                addMethod={addPrintMethod}
                currentMethod={orderInfo["Printing Areas"][area]["Method"]}
                addPrintMethodArgs={addMethodArgs}
              />
            ))}
          </div>
        </>
      ) : (
        <div>No item found</div>
      )}
    </div>
  );
};

export default ItemCreate;
