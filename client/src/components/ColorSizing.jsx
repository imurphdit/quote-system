import PropTypes from "prop-types";

const ColorSizing = ({ color, handleSizeChange, sizeValues }) => {
  return (
    <div className='border-2 w-xs mt-5'>
      <p className={`font-bold ml-5`}>{color}</p>
      {["S", "M", "L", "XL"].map((size) => (
        <div className="flex flex-col mb-1" key={size}>
          <p className="">{size}</p>
          <input
            type='number'
            placeholder='0'
            value={sizeValues[color]?.[size] || ""}
            onChange={(e) => handleSizeChange(color, size, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

ColorSizing.propTypes = {
  color: PropTypes.any,
  handleSizeChange: PropTypes.any,
  sizeValues: PropTypes.any,
};

export default ColorSizing;
