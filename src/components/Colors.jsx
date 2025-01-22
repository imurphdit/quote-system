import PropTypes from 'prop-types'

const Colors = ({ colors }) => {
  return (
    <div className="colors-grid">
        {colors.map((color) => (
            <div className='color' key={color}>{color}</div>
        ))}
    </div>
  )
}

Colors.propTypes = {
    colors: PropTypes.any
}

export default Colors