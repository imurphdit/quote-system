import PropTypes from "prop-types";

const PrintMethod = ({ printArea, addMethod, currentMethod, addPrintMethodArgs }) => {
  return (
    <div className='print-method-section'>
      <h2>{printArea}</h2>
      <div className='print-method-options'>
        <p
          className={currentMethod === "screenprint" ? "selected" : ""}
          onClick={() => addMethod(printArea, "screenprint")}
        >
          Screenprint
        </p>
        <p
          className={currentMethod === "embroidery" ? "selected" : ""}
          onClick={() => addMethod(printArea, "embroidery")}
        >
          Embroidery
        </p>
      </div>

      {currentMethod === "screenprint" ? (
        <div className="screenprint-options">
          <p>Ink Colors:</p>
          {['1', '2', '3', '4', '5', '6'].map(number => (
              <p key={number} onClick={() => addPrintMethodArgs(currentMethod, printArea, number)}>{number}</p>
          ))}
        </div>

      ) : currentMethod === "embroidery" ? (
        <div className="embroidery-options">
          <p>Ink Colors:</p>
          {['4 sq in', '9 sq in', '15 sq in'].map(number => (
              <p key={number} onClick={() => addPrintMethodArgs(currentMethod, printArea, number)}>{number}</p>
          ))}
        </div>
      ) : (
        <p>I HAVE NOTINNGGGGGGG</p>
      )}
    </div>
  );
};

PrintMethod.propTypes = {
  printArea: PropTypes.any,
  addMethod: PropTypes.any,
  currentMethod: PropTypes.any,
  addPrintMethodArgs: PropTypes.any,
};

export default PrintMethod;
