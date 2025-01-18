import './Item.css'
import PropTypes from 'prop-types'

function Item({ title, img, onClick }) {
  return (
    <div className="item" onClick={onClick}>
        <img src={img} className='item-img'/>
        <p>{title}</p>
    </div>
  )
}

Item.propTypes = {
    title: PropTypes.any,
    img: PropTypes.any,
    onClick: PropTypes.any,
}

export default Item