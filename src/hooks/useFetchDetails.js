import { useEffect, useState } from "react";
import { apiKey } from "../auxiliares/auxiliar.js";
import { Link } from "react-router-dom";

const useFetchDetails = (url, categoria, id, subcategoria) => {

    const [elemento, setElemento] = useState([])  
    
    const urlDetalle = `https://api.themoviedb.org/3/${categoria}/${id}?api_key=${apiKey}&language=es-ES`
    const urlDatosExtra = `https://api.themoviedb.org/3/${categoria}/${id}/${subcategoria}?api_key=${apiKey}&language=es-ES`
    const verificarUrl = () => url === true ? urlDetalle : urlDatosExtra 
    const urlVerificada = verificarUrl()

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(urlVerificada)
            const data = await res.json()
            setElemento(data)
        }
        fetchApi()
        .catch( () => <Link to="/*" />)
    }, [urlVerificada])
    
    return elemento
}

export default useFetchDetails;