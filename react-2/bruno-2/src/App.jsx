import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

const post = {
  id:1,
  user:"Claire",
  avatar:"img/avatar-2.png",
  photo: "img/photo-2.png",
  tataLikes: "356"
}

function postagem(post) {
  post.map()
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <Card></Card>
      </div>      
    </>
  )
}

export default App
