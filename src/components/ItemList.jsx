import { Link } from "react-router";
import Item from "./Item";
import "./ItemList.css";
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
      <h3>What would you like to create?</h3>
      <div className='item-grid'>
        <div className='filters'>
          <Item
            title='All'
            onClick={() => changeFilter("all")}
            className='filter'
          />
          <Item
            title='Hoodie'
            onClick={() => changeFilter("hoodie")}
            className='filter'
          />
          <Item
            title='Shirt'
            onClick={() => changeFilter("shirt")}
            className='filter'
          />
          <Item
            title='Bag'
            onClick={() => changeFilter("bag")}
            className='filter'
          />
        </div>
      </div>

      <hr />

      <div className='item-grid'>
        {filteredItems.map((item) => (
          <div className='item' key={item.id}>
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
