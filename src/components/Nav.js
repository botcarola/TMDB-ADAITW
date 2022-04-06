import { useState } from "react";
import { Link } from "react-router-dom";
import Busqueda from "./Busqueda";
import { BsTv } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { ImMenu } from "react-icons/im";


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
        <nav className="bg-zinc-900 border border-black flex text-gray-50 justify-between text-xl p-2">                            
            <div className="flex items-center">
                <div className="flex pr-3">
                        <BiMovie className={inputPelicula === true ? "text-red-600 m-2" : "m-2" } onClick={handleClickPelicula} />
                        <BsTv className={inputSerie === true ? "text-red-600 m-2" : "m-2"} onClick={handleClickSerie} />
                </div>
                {inputPelicula && <Busqueda tipo="Buscar películas" />}
                {inputSerie && <Busqueda tipo="Buscar series" />}
            </div>             
            <div className="hidden m-2 w-64 justify-between items-center text-base md:flex">
                <Link to="/">Home</Link>
                <Link to="/movies">Películas</Link>
                <Link to="/tv">Series</Link>
            </div>
            <button className="m-2 lg:hidden md:hidden">
                <ImMenu />
            </button>          
        </nav> 
    )
}

export default Nav;