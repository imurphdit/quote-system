import PropTypes from 'prop-types'

const PrintMethod = ({ printArea, addMethod, currentMethod }) => {
  return (
    <div className='print-method-section'>
        <h2>{printArea}</h2>
        <p className={currentMethod === 'screenprint' ? 'selected' : ''} onClick={() => addMethod(printArea, "screenprint")}>Screenprint</p>
        <p className={currentMethod === 'embroidery' ? 'selected' : ''} onClick={() => addMethod(printArea, "embroidery")}>Embroidery</p>
    </div>
  )
}

PrintMethod.propTypes = {
    printArea: PropTypes.any,
    addMethod: PropTypes.any,
    currentMethod: PropTypes.any,
}

export default PrintMethod