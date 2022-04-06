import { useState } from "react";
import { Link } from "react-router-dom";
import Busqueda from "./Busqueda";
import  logoNav from "../assets/logoNav.svg";
import { BsTv } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";


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
        <nav className="bg-zinc-900 border border-black flex text-gray-50 justify-between text-xl">
            <div className="flex w-2/6 ml-10 items-center">
                <a  className="mr-8" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                    <img className="h-20" src={logoNav} alt="Logo sitio the movie database"/>
                </a>
                <div className="flex items-center">
                    <div className="flex pr-3">
                        <BiMovie className={inputPelicula === true ? "text-red-600 m-2" : "m-2" } onClick={handleClickPelicula} />
                        <BsTv className={inputSerie === true ? "text-red-600 m-2" : "m-2"} onClick={handleClickSerie} />
                    </div>
                    {inputPelicula && <Busqueda tipo="Buscar películas" />}
                    {inputSerie && <Busqueda tipo="Buscar series" />}
                </div>               
            </div>
            <div className="flex w-1/6 justify-evenly items-center text-base">
                <Link to="/">Home</Link>
                <Link to="/movies">Películas</Link>
                <Link to="/tv">Series</Link>
            </div>          
        </nav> 
    )
}

export default Nav;