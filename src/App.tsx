import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Carousel/>
     
    </>
  )
}

export default App
