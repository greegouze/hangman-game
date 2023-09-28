import './App.css'
import Pendu from './components/Pendu'
import PenduContext from './contexts/PenduContext'
import { useState } from "react";

const word = 'yolo'
const tries = 2;

function App() {
  
  const [letterGuess, setLetterGuess] = useState([])
  
  return (
    <PenduContext.Provider value={{letterGuess, setLetterGuess}}>
    <Pendu word={word} tries={tries}/>
    </PenduContext.Provider>
    )
  }
  
  
  
  export default App
  
  