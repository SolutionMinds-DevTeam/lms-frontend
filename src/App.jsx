import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Track-Tube</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Track-Tube learning LMS is a platform designed to help you learn and track your progress in various subjects.
        </p>
      </div>
      
    </>
  )
}

export default App
