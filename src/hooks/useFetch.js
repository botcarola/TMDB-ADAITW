import { useEffect, useState } from "react";
import { apiKey } from "../auxiliares/auxiliar.js";
import { Link } from "react-router-dom";

const useFetch = (url, categoria, subcategoria, paginado) => {

    const [elemento, setElemento] = useState([])
    const [dataPaginado, setDataPaginado ] = useState([])
    
    const urlGeneral = `https://api.themoviedb.org/3/${categoria}/${subcategoria}?api_key=${apiKey}&language=es-Es&page=${paginado}`
    const urlTrending = `https://api.themoviedb.org/3/trending/${categoria}/day?api_key=${apiKey}&language=es-Es&page=${paginado}`
    const verificarUrl = () => url === true ? urlGeneral : urlTrending 
    const urlVerificada = verificarUrl()

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(urlVerificada)
            const data = await res.json()
            setElemento(data.results)
            setDataPaginado(data)
        }
        fetchApi()
        .catch( () => <Link to="/*" />)
    }, [paginado])
    
    return [elemento, dataPaginado]
}

export default useFetch;