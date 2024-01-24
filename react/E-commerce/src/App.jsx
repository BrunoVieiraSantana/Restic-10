import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import Home from "./pages/Home"
import MyOrders from "./pages/MyOrders"
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
            <Route path="/">
              <Route path="" element={<Home/>}/>
            </Route>
            <Route path="/my">
              <Route path="" element={<MyOrders/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
