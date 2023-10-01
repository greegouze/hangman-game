import { Link } from "react-router-dom";

export default function Home() {
    
    
    return (
        <div>
        <h1>Welcome to the Pendu !!!</h1>
        <Link to={`pendu`}><button>Get started Pendu</button></Link>
        <Link to={`convert`}><button>Get started convertRomeLetter</button></Link>
        </div>
        )
        
    }
    