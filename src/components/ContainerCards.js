import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import { spliceArray } from "../auxiliares/auxiliar";
import Card from "./Card";
import Paginado from "./Paginado";

const ContainerCards = ({ url, tipoRuta, subtipoRuta, titulo, recortarArray, paginado}) => {    
    
    const [ paginacion, setPaginacion ] = useState(1)     
    const [elementos , dataPaginado] = useFetch(url, tipoRuta, subtipoRuta, paginacion )
    const arrayVerificado = spliceArray(elementos, recortarArray)
       
    return (
    <div className="mt-10 mb-5 m-5">
        <Link className="flex items-center text-xl sm:text-3xl text-white mb-10 font-thin" to ={`/${tipoRuta}/${subtipoRuta}/page/${paginado}`}>
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
        <Paginado
        evento={(e, value) => setPaginacion(value)}
        valorPaginado={paginacion}
        paginado={paginado}
        data={dataPaginado} 
        /> 
    </div>
    )
}

export default ContainerCards;