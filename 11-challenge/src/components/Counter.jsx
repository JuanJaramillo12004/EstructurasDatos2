import React from "react";
import { useCounter } from "../hooks/useCounter";
import PropTypes from "prop-types";

const Counter = ( { countValue} ) => {
  const { count, handleAdd, handleSubstract, handleReset } = useCounter(countValue);

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button className="buttom" onClick={() => handleAdd()}>
          Increment
        </button>
        <button className="buttom" onClick={() => handleSubstract()}>
          Decrement
        </button>
        <button className="buttom" onClick={() => handleReset(count)}>
          Reset
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  countValue: 0,
};

export default Counter;
