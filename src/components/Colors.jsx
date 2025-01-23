import PropTypes from 'prop-types'

const Colors = ({ color, onClick, className }) => {
  return (
    <div className='color' onClick={() => onClick(color)}>
      <p className={className}>{color}</p>
      </div>
  )
}

Colors.propTypes = {
    color: PropTypes.any,
    onClick: PropTypes.any,
    className: PropTypes.any
}

export default Colors