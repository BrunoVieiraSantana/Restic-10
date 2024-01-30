import { useState } from 'react'
import Form from './components/Form'
import Form2 from './components/Form2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form></Form>
    </>
  )
}

export default App
