
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Devstacks from './components/Devstacks'
import type { devstacktype } from './Types/DevStacktype'

const devstackpromise = async(): Promise<devstacktype[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <Devstacks devstackpromise = {devstackpromise()}></Devstacks>
      </Suspense>
    </>
  )
}

export default App
