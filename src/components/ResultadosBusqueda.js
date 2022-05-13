import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../auxiliares/auxiliar";
import Card from "./Card";
import Paginado from "./Paginado";

const ResultadosBusqueda = () => {
    
    const params = useParams()    
    const [elemento, setElemento] = useState([])
    const [paginacion, setPaginacion] = useState(1)

    useEffect( () => {
        const fetchApi = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/${params.tipoBusqueda}?api_key=${apiKey}&language=es-ES&query=${params.resultados}&page=${paginacion}`)
            const data = await res.json()
            setElemento(data)            
        }
        fetchApi()

    }, [paginacion, params.resultados])

    const array = elemento.results
    // no dejes console log!
    console.log(elemento
        )
    return(
        <main className="flex flex-col items-center mb-10 mt-10">
            <div className="flex flex-col w-3/5">
                <h2 className="text-white text-3xl font-thin mb-5">
                    Resultados para: {params.resultados}
                </h2>
                <div className="flex flex-wrap justify-evenly">
                    {!!array &&
                        array.map(curr => 
                        <Card
                        key={curr.id}
                        id={curr.id}
                        tipoRuta={params.tipoBusqueda}
                        imagen={curr.poster_path}
                        titulo={!!curr.title ? curr.title : curr.name}
                        />)
                    }
                </div>
            </div>
            <Paginado
            evento={(e, value) => setPaginacion(value)}
            valorPaginado={paginacion}
            paginado={true}
            data={elemento}
            />
        </main>
    )
}

export default ResultadosBusqueda;