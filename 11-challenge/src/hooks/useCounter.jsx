import { useState } from 'react'


export const useCounter = (countValue) => {
  const [count, setCount] = useState(countValue);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(countValue);
  };
  return { count, handleAdd, handleSubstract, handleReset };
};
