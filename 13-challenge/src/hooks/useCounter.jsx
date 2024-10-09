import { useState } from 'react'


export const useCounter = (countValue) => {
  const [count, setCount] = useState(countValue);

  const increment = () => {
    setCount(count + 1);
  }

  return {
    counter: count,
    increment
  }
}
