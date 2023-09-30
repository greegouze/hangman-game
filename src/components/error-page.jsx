import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div id="error-page">
        <h1>Coco, tu t es perdu !</h1>
        <p>Désoler mais cette page n existe pas</p>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
        </div>
        );
    }