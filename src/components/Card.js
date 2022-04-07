import { getByTitle } from "@testing-library/react";

const Card = ({imagen, titulo}) => {
    return(
    <div className="w-55 m-1 mb-3">         
        <img className="w-5/5 h-80" src={`https://image.tmdb.org/t/p/original${imagen}`} alt={titulo} /> 
        <h2 className="text-white mt-4">
            {titulo.length > 25 ? `${titulo.slice(0, 22)}...` : titulo}
        </h2>              
    </div>
    )
}

export default Card;
 