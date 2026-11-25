import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center" className='bg-red-600'>
        <h1 className='text-white'>Mernstack Ecommerce</h1>
      </section>
    </>
  )
}

export default App
