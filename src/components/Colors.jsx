import PropTypes from 'prop-types'

const Colors = ({ colors, onClick }) => {
  return (
    <div className="colors-grid">
        {colors.map((color) => (
            <div className='color' key={color} onClick={() => onClick(color)}>{color}</div>
        ))}
    </div>
  )
}

Colors.propTypes = {
    colors: PropTypes.any,
    onClick: PropTypes.any
}

export default Colors