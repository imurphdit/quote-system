import Item from "./Item"
import './ItemList.css'
import PropTypes from 'prop-types'

function ItemList({ items }) {
  return (
    <>
        <h3>What would you like to create?</h3>

        <div className="item-grid">
          {items.map((item) => (
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