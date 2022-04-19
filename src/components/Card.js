import { Link } from "react-router-dom";
import notFound from "../assets/notfound.png";


const Card = ({id, tipoRuta, imagen, titulo}) => {

    return(
        <Link to={`/${tipoRuta}/${id}/info`} className="m-1 mb-3" >         
            <img className="w-55 h-80" src={!!imagen ? `https://image.tmdb.org/t/p/original${imagen}` : notFound} alt={titulo} /> 
            <h2 className="text-white mt-4">
                {titulo.length > 23 ? `${titulo.slice(0, 23)}...` : titulo}
            </h2>              
        </Link>
    )
}

export default Card;


 