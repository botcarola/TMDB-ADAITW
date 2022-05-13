import { useEffect, useState } from "react";
import { apiKey } from "../auxiliares/auxiliar.js";
import { Link } from "react-router-dom";

const useFetch = (url, categoria, subcategoria, paginado) => {
// Esta muy bien este hook! Un desafio extra seria lograr que useFetch y useFetchDetails sean el mismo hook. 
// Con un poquito de creatividad en los params que le pasas se re puede!
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
        // si cambia urlVerificada vamos a querer hacer el fetch de nuevo, asi que deberia estar 
        //  en el Array de dependencias 
    }, [paginado])
    
    return [elemento, dataPaginado]
}

export default useFetch;