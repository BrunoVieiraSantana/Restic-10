import { useContext, useState } from "react"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home/>}/>
          </Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
