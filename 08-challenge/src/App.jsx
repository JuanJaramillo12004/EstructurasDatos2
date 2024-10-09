import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }
  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => handleAdd()}>Increment</button>
        <button onClick={() => handleSubstract()}>Decrement</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </>
  )
}

export default App
