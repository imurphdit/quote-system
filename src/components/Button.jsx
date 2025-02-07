import PropTypes from 'prop-types'

const Button = ({ name, onClick, className, divClass }) => {
  return (
    <div className={divClass} onClick={() => onClick(name)}>
      <p className={className}>{name}</p>
      </div>
  )
}

Button.propTypes = {
    name: PropTypes.any,
    onClick: PropTypes.any,
    className: PropTypes.any,
    divClass: PropTypes.any
}

export default Button