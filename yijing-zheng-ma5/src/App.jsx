import { useState } from 'react'
import Cell from './cell'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function countNumberOfOnCells(isOn) {
    if (isOn) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div>Count: {count}</div>
      <div className='container'>
        <Cell calculate={countNumberOfOnCells}></Cell>
        <Cell calculate={countNumberOfOnCells}></Cell>
        <Cell calculate={countNumberOfOnCells}></Cell>
        <Cell calculate={countNumberOfOnCells}></Cell>
      </div>
    </div>
  )
}

export default App
