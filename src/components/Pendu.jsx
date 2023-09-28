import { useState } from "react";
import PenduContext from "../contexts/PenduContext";
import { useContext } from "react";

function Pendu({word, tries}){
  
  const {letterGuess, setLetterGuess} = useContext(PenduContext)
  
  const [input, setInput] =useState('') //me permet d'initialiser un état puis ensuite le modifier
  const [triesCount, setTriesCount] = useState(tries)
  
  
  const checked=(letter) => {
    setLetterGuess([...letterGuess, letter]) // j'ajoute letter à mon tableau vide avec les lettre deviné
  }
  
  const newWord = () => {
    //permet de mettre dans un tableau puis pour chaque index, le remplacer pas un '_' puis avec join je relie le tous
    return word.split('').map((letter) => (letterGuess.includes(letter) ? letter : '_')).join(' ')
  }
  
  const handleChange = (event) =>{
    const userInput = event.target.value;
    setInput(userInput)
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(input.length === 1){
      //je vérifie si la lettre est dans le mot
      if(word.includes(input)){
        checked(input)
      } 
      else {
        setTriesCount(triesCount - 1)
        checked(input)
      }
      setInput("")
    }
    
  }
  
  const retry = () => {
    if(wordIsComplete === true || triesCount === 0 ){
      document.location.href="/."
    }
  }
  
  
  const wordDisplay = newWord();
  const wordIsComplete = !wordDisplay.includes("_"); // Vérifie si le mot a été complètement découvert
  
  return (
    <div>
    <h1>Pendu</h1>
    <div>
    <form onSubmit={onSubmit}>
    <input type="text" onChange={handleChange} value={input} />
    <button>Valider</button>
    {triesCount === 0 ? (
      <div>
      <p>Perdu</p>
      <h2>Le mot était : {word}</h2>
      <button onClick={retry}>Tu retente ?</button>
      </div>
      ) : wordIsComplete ? (
        <div>
        <p>Bravo ! Vous avez trouvé le mot.</p>
        <button onClick={retry}>Tu retente ?</button>
        </div>
        ) : (
          <>
          <p>Nombre d essais restants : {triesCount}</p>
          <p>Mot : {wordDisplay}</p>
          <p>Lettres découvertes : {letterGuess.join(", ")}</p>
          </>
          )}
          </form>
          </div>
          </div>
          );
        }
        
        export default Pendu