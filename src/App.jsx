import { useContext } from 'react'
import './App.css'
import { AppContext } from './Context/AppContext'
import Header from './Components/Header'
import { RandomMemeCard } from './Components/RandomMemeCard'
import { CustomMemeCard } from './Components/CustomMemeCard'

function App() {

  return (
    <div className="w-full flex flex-col items-center">
      <Header/>
      <RandomMemeCard/>
      <CustomMemeCard/>
    </div>
  )
}

export default App
