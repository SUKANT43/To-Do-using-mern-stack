import { useState } from 'react'
import { ToDo } from './ToDo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToDo/>
    </div>
  )
}

export default App
