import './Item.css'
import PropTypes from 'prop-types'

function Item({ title, img }) {
  return (
    <div className="item">
        <img src={img} className='item-img'/>
        <p>{title}</p>
    </div>
  )
}

Item.propTypes = {
    title: PropTypes.any,
    img: PropTypes.any,
}

export default Item