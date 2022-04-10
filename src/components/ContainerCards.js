import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import useSplice from "../hooks/useSplice";
import Card from "./Card";

const ContainerCards = ({ url, tipoRuta, subtipoRuta, titulo, recortarArray}) => {
    
    const [paginado, setPaginado ] = useState(1)
    const elementos = useFetch(url, tipoRuta, subtipoRuta, paginado)
    console.log(elementos)
    const arrayVerificado = useSplice(elementos, recortarArray)   

    return (
<<<<<<< Updated upstream
    <div className="mt-10 mb-5 m-5">
        <Link className="flex items-center text-3xl text-white mb-4 font-thin" to ={`/${tipoRuta}/${subtipoRuta}/page/1`}>
            {titulo}
        <BsArrowRightShort className="ml-3"/>
        </Link>
        <div className="flex flex-wrap justify-evenly">
            {arrayVerificado.map( curr => 
            <Link to="/" key={curr.id}>
                <Card 
                    imagen={curr.poster_path}
                    titulo={!!curr.title ? curr.title : curr.name}            
                />                
            </Link>
            )}
        </div>            
    </div>
=======
        <div className="mt-10 mb-5 m-5">
            <Link className="flex items-center text-3xl text-white mb-4 font-thin" to ={`/${tipoRuta}/${subtipoRuta}/page/${paginado}`}>
                {titulo}
            <BsArrowRightShort className="ml-3"/>
            </Link>
            <div className="flex flex-wrap justify-evenly">
                {arrayVerificado.map( curr => 
                <Card 
                key={curr.id}
                id={curr.id}
                tipoRuta={tipoRuta}
                imagen={curr.poster_path}
                titulo={!!curr.title ? curr.title : curr.name}            
                />                
                )}
            </div>            
        </div>
>>>>>>> Stashed changes
    )
}

export default ContainerCards;