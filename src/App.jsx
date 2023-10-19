import { useState } from "react"

function App() {
  const [def, setDef] = useState(0);

  function increment(){
    setDef(def + 1)
  }

  function decrement(){
    setDef(def - 1)
  }
  
  return (
    <>
      <button onClick={increment}>+</button>
      <label>{def}</label>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
