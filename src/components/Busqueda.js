import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Busqueda = ({tipo,categoria}) => {

    const [valorInput, setValorInput] = useState()
    const navigate = useNavigate()    

    const handleChange = e => {
        setValorInput(e.target.value)                
    }
    
    const handleSubmit = e => {
        e.preventDefault()               
        navigate(`/${categoria}/resultados/${valorInput}`)
    }   

    return (
        <form className="relative text-gray-600" onSubmit={handleSubmit}>
            <label>
                <input
                onChange={handleChange}
                id="search" 
                type="text" 
                name="search" 
                placeholder={tipo}
                value={valorInput || ""} 
                className="bg-zinc-800 text-slate-200 h-10 px-5 pr-8 rounded-full text-sm focus:outline-none"
                />
            </label>
            <button className="absolute right-0 top-0 mt-3 mr-4" aria-label="Buscar">
                <GoSearch />
            </button>
        </form>
    )
}

export default Busqueda;
