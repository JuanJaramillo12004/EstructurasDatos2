import { useState } from "react";

const useCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState();
  const [operator, setOperator] = useState();

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("0");
      setCurrentValue(undefined);
      setOperator(undefined);
    } else if (value === "=") {
      if (currentValue !== undefined && operator !== undefined) {
        const result = eval(`${currentValue} ${operator} ${display}`);
        setDisplay(result.toString());
        setCurrentValue(undefined);
        setOperator(undefined);
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setCurrentValue(display);
      setOperator(value);
      setDisplay("0");
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  return { display, handleButtonClick };
};

export default useCalculator;
