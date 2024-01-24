import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import Home from "./pages/Home"
import MyOrders from "./pages/MyOrders"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/myorders" element={<MyOrders/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
