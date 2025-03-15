import PropTypes from "prop-types";

const PrintMethod = ({ printArea, addMethod, currentMethod, addPrintMethodArgs }) => {
  return (
    <div className='flex flex-col border-2 mt-5 p-5 w-xl'>
      <h2 className="font-bold ml-5 mb-5">{printArea}</h2>
      <div className='flex flex-row gap-4 mb-5'>
        <p
          className={currentMethod === "screenprint" ? "bg-gray-500" : ""}
          onClick={() => addMethod(printArea, "screenprint")}
        >
          Screenprint
        </p>
        <p
          className={currentMethod === "embroidery" ? "bg-gray-500" : ""}
          onClick={() => addMethod(printArea, "embroidery")}
        >
          Embroidery
        </p>
      </div>

      {currentMethod === "screenprint" ? (
        <div className="flex flex-row">
          <p className="font-bold mr-2">Ink Colors:</p>
          {['1', '2', '3', '4', '5', '6'].map(number => (
              <p className="mr-2 border-1 p-1" key={number} onClick={() => addPrintMethodArgs(currentMethod, printArea, number)}>{number}</p>
          ))}
        </div>

      ) : currentMethod === "embroidery" ? (
        <div className="flex flex-row">
          <p className="font-bold mr-2">Print Size:</p>
          {['4 sq in', '9 sq in', '15 sq in'].map(number => (
              <p className='mr-2 border-1 p-1' key={number} onClick={() => addPrintMethodArgs(currentMethod, printArea, number)}>{number}</p>
          ))}
        </div>
      ) : (
        <></>
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
