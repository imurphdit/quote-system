import PropTypes from 'prop-types'

const PrintMethod = ({ printArea, addMethod }) => {
  return (
    <div className='print-method-section'>
        <h2>{printArea}</h2>
        <p onClick={() => addMethod(printArea, "screenprint")}>Screenprint</p>
        <p onClick={() => addMethod(printArea, "embroidery")}>Embroidery</p>
    </div>
  )
}

PrintMethod.propTypes = {
    printArea: PropTypes.any,
    addMethod: PropTypes.any,
}

export default PrintMethod