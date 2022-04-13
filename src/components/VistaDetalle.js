import { useParams, Link } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { recorrerGeneros, agregarComas } from "../auxiliares/auxiliar";
import SocialMedia from "./SocialMedia";
import { FaLink } from "react-icons/fa";
import Rating from '@mui/material/Rating';

const VistaDetalle = () => {

    const params = useParams() 
    const elemento = useFetchDetails(true, params.categoria, params.id )
    
    return(        
        <main className="flex flex-col">
            <div className="h-[35rem]">
                <img className="object-cover object-center h-full w-full " src={`https://image.tmdb.org/t/p/original${elemento.backdrop_path}`} alt={elemento.name} /> 
            </div>
            <div className="flex text-white justify-center mt-10 mb-20 text-base font-semibold md:text-lg">
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
            {params.info === "info" && 
                <div className="flex justify-center mb-20">
                    <div className="flex w-4/6 flex-col justify-center sm:flex-row">                    
                        <div className="sm:w-[300px] sm:mr-3">
                            <img className="min-w-full" src={`https://image.tmdb.org/t/p/original${elemento.poster_path}`} alt={elemento.name} />
                        </div>                    
                        <div className="text-white text-xs w-full">
                            <h2 className="font-light text-xl sm:text-3xl mb-6 mt-10 sm:mt-0">
                                {!!elemento.title ? elemento.title : elemento.name}
                            </h2>
                            {!!elemento.vote_average && <Rating className="mb-5" name="read-only" defaultValue={elemento.vote_average / 2} precision={0.5} readOnly /> }
                            <p className="mb-4 w-full lg:w-2/4">
                                {elemento.overview}
                            </p>
                            <h4 className="mb-4">
                                Duración: {!!elemento.runtime ? elemento.runtime : elemento.episode_run_time} min.
                            </h4>
                            <div className="flex mb-4">
                                <h4 className="mr-2">
                                    Géneros:
                                </h4>
                                <ul className="flex">
                                    {!!elemento.genres && recorrerGeneros(elemento.genres)}
                                </ul>
                            </div>
                            <h4 className="mb-4">
                                {!!elemento.budget && `Presupuesto: $ ${agregarComas(elemento.budget)}`}
                            </h4>
                            <h4 className="mb-4">
                                {!!elemento.revenue && `Recaudación: $ ${agregarComas(elemento.revenue)}`}
                            </h4> 
                            <div className="flex">
                                <h4 className="mr-2">
                                    Producción:
                                </h4>
                                <ul className="flex">
                                    {!!elemento.production_companies && recorrerGeneros(elemento.production_companies)}
                                </ul>
                            </div> 
                            <ul className="flex text-2xl mt-10 mb-10 w-40 justify-between">                            
                                {<SocialMedia 
                                categoria={params.categoria} 
                                id={params.id}/>}
                                <li>
                                    <a href={elemento.homepage} target="_blank" rel="noopener noreferrer">
                                        <FaLink />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                
                </div>
            }     
            {params.info === "reparto" &&
                <div>
                    
                </div>
                
            }       
        </main>        
    )
}

export default VistaDetalle;