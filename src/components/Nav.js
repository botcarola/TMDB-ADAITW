import { useState } from "react";
import { Link } from "react-router-dom";
import Busqueda from "./Busqueda";
import { BsTv } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import MenuResponsive from "./MenuResponsive";


const Nav = () => {

    const [ inputPelicula, setInputPelicula ] = useState (true)
    const [ inputSerie, setInputSerie ] = useState (false)    

    const handleClickPelicula = () => {     
        setInputPelicula ( true )
        setInputSerie ( false )
    }
    const handleClickSerie = () => {
        setInputPelicula ( false )
        setInputSerie ( true )
    }

    return (
        <nav className="z-10 bg-zinc-900 border border-black flex text-gray-50 justify-between text-xl p-2 sticky top-0 md:relative">                            
            <div className="flex items-center">
                <div className="flex pr-3">
                        <BiMovie className={inputPelicula === true ? "text-red-600 m-2" : "m-2" } onClick={handleClickPelicula} />
                        <BsTv className={inputSerie === true ? "text-red-600 m-2" : "m-2"} onClick={handleClickSerie} />
                </div>
                {inputPelicula && <Busqueda tipo="Buscar películas" categoria="movie"/>}
                {inputSerie && <Busqueda tipo="Buscar series" categoria="tv"/>}
            </div>             
            <div className="hidden m-2 w-64 justify-between items-center text-base md:flex">
                <Link to="/">Inicio</Link>
                <Link to="/movies">Películas</Link>
                <Link to="/tv">Series</Link>
            </div>
            <button className="m-2 lg:hidden md:hidden">
                <MenuResponsive />
            </button>          
        </nav> 
    )
}

export default Nav;