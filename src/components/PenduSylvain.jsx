import { useState } from "react";


const wordToGuess = "yolo"
const underscore = "_".repeat(wordToGuess.length)

function PenduSylvain() {
    
    const [input, setInput] = useState('')
    const [guesseWord, setGuessWord] = useState(underscore)
    
    
    const changeUnderscore = (e) => {
        e.preventDefault()
        const letter = input[0] ?? ''
        
        for(let i = 0; i < wordToGuess.length; i++){
            if(wordToGuess[i] === letter){
                //on remplace
                setGuessWord
            }
        }
    }
    return (
        <div>
        <h1>{underscore}</h1>
        <form action="" onSubmit={changeUnderscore}>
        <input type="text" value={input} onChange={((e) => setInput(e.target.value))}/>
        <button>Valider</button>
        </form>
        </div>
        )
    }
    
    export default PenduSylvain