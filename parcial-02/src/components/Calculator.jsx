import React from "react";
import useCalculator from "../hooks/useCalculator";

const Calculator = () => {
  const { display, handleButtonClick } = useCalculator();

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '.', '0', 'C', '+', '='
  ];

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-display">{display}</div>
      <div className="button-grid">
        {buttons.map((value, index) => (
          <button
            key={index}
            value={value}
            className="calculator-button"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
