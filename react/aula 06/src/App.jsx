import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
function App() {
  const [cart, setCart] = useState([])
 console.log(cart)
  return (
    <div className="flex flex-col items-center justify-center">
    <Header cart={cart}/>
    <Main setCart={setCart}/>
    </div>
  )
}

export default App
