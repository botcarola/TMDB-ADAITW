import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    }, [])

    console.log(elemento)

    return(        
        <main className="flex flex-col">
            <div className="h-[35rem]">
                <img className="object-cover object-top h-full w-full" src={`https://image.tmdb.org/t/p/original${elemento.backdrop_path}`} alt={elemento.name} /> 
            </div>
            <div className="flex text-white justify-center mt-10 mb-10 text-lg font-semibold">
                <Link className="mr-2 ml-2 focus:border-b-4 border-white" to={`/${params.categoria}/${params.id}/info`}>
                    INFO
                </Link>
                <Link className="mr-2 ml-2 focus:border-b-4 border-white" to={`/${params.categoria}/${params.id}/reparto`}>
                    REPARTO
                </Link>
                {params.categoria === "movie" ? 
                <Link className="mr-2 ml-2 focus:border-b-4 border-white" to={`/${params.categoria}/${params.id}/videos`}>
                    VIDEOS
                </Link> 
                : 
                <Link className="mr-2 ml-2 focus:border-b-4 border-white" to={`/${params.categoria}/${params.id}/episodios`}>
                    EPISODIOS
                </Link>
                }               
                <Link className="mr-2 ml-2 focus:border-b-4 border-white" to={`/${params.categoria}/${params.id}/similares`}>
                    SIMILARES
                </Link>                
            </div>
            <div className="flex justify-center">
                <div className="flex">
                    <div>
                        <img className="w-5/5 h-80" src={`https://image.tmdb.org/t/p/original${elemento.poster_path}`} alt={elemento.name} />
                    </div>
                    <div>
                        <h2>
                            {!!elemento.title ? elemento.title : elemento.name}
                        </h2>
                    </div>
                </div>                
            </div>            
        </main>        
    )
}

export default VistaDetalle;