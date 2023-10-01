import { useState } from "react";

export default function ConvertRomeLetter()  {
    const [input, setInput] = useState('')
    const[score, setScore] = useState('')
    
    const romain = [
        {I:1, II:2, III: 3, IV: 4, V:5, VI:6, VII: 7, VIII:8, IX:9, X:10}
    ]
    
    console.log(romain[0]["I"]);
    
    //je veux récupérer la valeur rentrer dans l'input
    //je veux vérifier la valeur de l'input afin d'afficher le résultat 
    const handleChange = (e) =>{
        const indexUser = e.target.value.toUpperCase()
        setInput(indexUser)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        const result = findValue(romain, input);
        if(!findValue){
            setScore('nop')
        }
        setScore(result)
        setInput('')
    }
    
    
    const findValue = (romain, input) => {
        
        const matchingKeys = Object.keys(romain[0]).filter(key => key === input);
        
        if (matchingKeys.length > 0) {
            return romain[0][matchingKeys[0]];
        } else {
            return 'nop'; 
        }     
        
    }
    
    return (
        <>
        <h1>Ave ! Bienvenue sur votre convertisseur de chiffres romains</h1>
        <form onSubmit={onSubmit}> 
        <label htmlFor='input'>Entrez un nombre romain : </label>
        <input
        type="text"
        id="input"
        value={input}
        onChange={handleChange}
        ></input>
        <button type="submit">Convertir</button>
        </form>
        <p>Résultat : {score}</p>
        </>
        )
        
    }