import { useState } from 'react'
import './App.css'
import IntroductionSection from './components/IntroductionSection'
import Header from './components/Header'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <>
    <Header/>
    <IntroductionSection/>
    <ContactSection/>
    </>
  )
}

export default App
