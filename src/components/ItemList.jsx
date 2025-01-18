import Item from "./Item"
import './ItemList.css'
import PropTypes from 'prop-types'
import { useState } from 'react';

function ItemList({ items }) {

  const [filter, setFilter] = useState("all");

  const changeFilter = (category) => {
    setFilter(category);
  }

  const filteredItems = (filter) === "all"
    ? items
    : items.filter((item) => item.category === filter);

  return (
    <>
        <h3>What would you like to create?</h3>
        <div className="item-grid">
          <Item
          title="All"
          onClick={() => changeFilter("all")}
          />
          <Item
          title="Hoodie Filter"
          onClick={() => changeFilter("hoodie")}
          />
          <Item
          title="Shirt Filter"
          onClick={() => changeFilter("shirt")}
          />
          <Item
          title="Bag Filter"
          onClick={() => changeFilter("bag")}
          />
        </div>

        <hr/>

        <div className="item-grid">
          {filteredItems.map((item) => (
            <Item
            key={item.id}
            title={item.title}
            img={item.img}
            />
          ))}
        </div>
    </>
  )
}

ItemList.propTypes = {
  items: PropTypes.any,
}

export default ItemList