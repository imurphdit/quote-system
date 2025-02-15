import { Link } from "react-router";
import Item from "./Item";
//import "./ItemList.css";
import PropTypes from "prop-types";
import { useState } from "react";

function ItemList({ items }) {
  const [filter, setFilter] = useState("all");

  const changeFilter = (category) => {
    setFilter(category);
  };

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <>
      <h3 className="text-center font-bold text-xl">What would you like to create?</h3>
      <div className=''>
        <div className='flex flex-row flex-wrap justify-center p-5 gap-3'>
          <Item
            title='All'
            onClick={() => changeFilter("all")}
            className={'border-1 rounded-xl text-center'}
          />
          <Item
            title='Hoodie'
            onClick={() => changeFilter("hoodie")}
            className='border-1 rounded-xl text-center'
          />
          <Item
            title='Shirt'
            onClick={() => changeFilter("shirt")}
            className='border-1 rounded-xl text-center'
          />
          <Item
            title='Bag'
            onClick={() => changeFilter("bag")}
            className='border-1 rounded-xl text-center'
          />
        </div>
      </div>

      <hr />

      <div className='flex flex-wrap justify-center align-center gap-4 p-5'>
        {filteredItems.map((item) => (
          <div className='text-center border-1 border-black w-1xs rounded-xl flex justify-center' key={item.id}>
            <Link to={"/item/" + item.id}>
              <Item title={item.title} img={item.img} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

ItemList.propTypes = {
  items: PropTypes.any,
};

export default ItemList;
