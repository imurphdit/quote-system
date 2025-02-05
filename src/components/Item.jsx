import "./Item.css";
import PropTypes from "prop-types";

function Item({ title, img, onClick, className }) {
  return (
    <div onClick={onClick} className={className}>
      {img ? <img src={img} className='item-img' /> : ""}
      <p>{title}</p>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.any,
  img: PropTypes.any,
  onClick: PropTypes.any,
  className: PropTypes.any,
};

export default Item;
