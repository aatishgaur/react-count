
import { useState } from 'react'

function App() {
  
  const [count,setcount] = useState(0)

  const hanldeIncrement = () =>{
       setcount(count + 1)
  }

  const handleDecrement = () =>{
      setcount(count - 1)
  }
     
  return (
    <>
    <h1>Count</h1>
    <h1>Count: {count}</h1>
    <button onClick={hanldeIncrement}>Increment</button>
      <button onClick={ handleDecrement}>Decrement</button>
    </>
  )
}

export default App
