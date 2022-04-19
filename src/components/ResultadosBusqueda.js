import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../auxiliares/auxiliar";

const ResultadosBusqueda = () => {
    
    const params = useParams()
    const [elemento, setElemento] = useState([])

    useEffect( () => {
        const fetchApi = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=es-ES&query=${params.resultados}&page=1`)
            const data = await res.json()
            setElemento(data.results)            
        }
        fetchApi()

    }, [params.resultados])
    console.log(elemento)

    return(
        <>
        </>
    )
}

export default ResultadosBusqueda;