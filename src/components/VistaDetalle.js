import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { recorrerGeneros } from "../auxiliares/auxiliar";
import SocialMedia from "./SocialMedia";

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
                    <div className="ml-10 text-white text-sm">
                        <h2 className="font-light text-3xl">
                            {!!elemento.title ? elemento.title : elemento.name}
                        </h2>
                        <p className="text-sm">
                            {elemento.overview}
                        </p>
                        <h4>
                            Duración: {elemento.runtime} min.
                        </h4>
                        <div className="flex">
                            <h4 className="mr-2">Géneros: </h4>
                            <ul className="flex">
                                {!!elemento.genres && recorrerGeneros(elemento.genres)}
                            </ul>
                        </div>
                        <h4>
                            Presupuesto: $ {!!elemento.budget ? elemento.budget : "-"}
                        </h4>
                        <h4>
                            Recaudación: $ {!!elemento.revenue ? elemento.revenue : "-"}
                        </h4> 
                        <div className="flex">
                            <h4 className="mr-2">
                                Producción:
                            </h4>
                            <ul className="flex">
                                {!!elemento.production_companies && recorrerGeneros(elemento.production_companies)}
                            </ul>
                        </div> 
                        <ul>                            
                            {<SocialMedia categoria={params.categoria} id={params.id}/>}
                        </ul>
                    </div>
                </div>                
            </div>            
        </main>        
    )
}

export default VistaDetalle;