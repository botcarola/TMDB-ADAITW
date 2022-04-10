import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VistaDetalle = () => {

    const [elemento, setElemento] = useState([])
    const params = useParams()   

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch( `https://api.themoviedb.org/3/${params.categoria}/${params.id}?api_key=d2db916ed787e45a269779c746706c07`)
            const data = await res.json()
            setElemento(data)
        }
        fetchApi()
        .catch( () => console.log("error"))
    }, [])

    console.log(elemento)

    return(
        <>
        <header>
            <img src={`https://image.tmdb.org/t/p/original${elemento.backdrop_path}`} alt={elemento.name} /> 
        </header>
        </>
    )
}

export default VistaDetalle;