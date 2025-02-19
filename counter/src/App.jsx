import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addVal = () => {
    setCounter(counter + 1)
  }
  const rmVal = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={addVal}>add</button>
      <button onClick={rmVal}>remove</button>
    </>
  )
}

export default App
