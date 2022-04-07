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
    <div className="flex flex-col mt-10 mb-5">
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
    )
}

export default ContainerCards;