import PropTypes from 'prop-types'

const ColorSizing = ({ color }) => {
  return (
    <div className='color-size-grid'>
        <p className='color-size-title'>{color}</p>
        <div className='color-size'>
            <p>S</p>
            <input type='number' placeholder='0'></input>
        </div>

        <div className='color-size'>
            <p>M</p>
            <input type='number' placeholder='0'></input>
        </div>

        <div className='color-size'>
            <p>L</p>
            <input type='number' placeholder='0'></input>
        </div>
    </div>
  )
}

ColorSizing.propTypes = {
    color: PropTypes.any,
}

export default ColorSizing