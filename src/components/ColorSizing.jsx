import PropTypes from 'prop-types'

const ColorSizing = ({ color, handleSizeChange, sizeValues }) => {
  return (
    <div className='color-size-grid'>
        <p className='color-size-title'>{color}</p>
        {["S", "M", "L", "XL"].map((size) => (
            <div key={size}>
                <p>{size}</p>
                <input
                type="number"
                placeholder='0'
                value={sizeValues[color]?.[size] || ""}
                onChange={(e) => handleSizeChange(color, size, e.target.value)}
                />
            </div>
        ))}
    </div>
  )
}

ColorSizing.propTypes = {
    color: PropTypes.any,
    handleSizeChange: PropTypes.any,
    sizeValues: PropTypes.any,
}

export default ColorSizing