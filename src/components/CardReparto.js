import { Link } from "react-router-dom";
import notFound from "../assets/notfound.png";

const CardReparto = ({img, nombre, rol }) => {      

    return(
        <Link to="/" className="m-1 mb-3">
            <div>
                <img className="w-55 h-80" src={!!img ? `https://image.tmdb.org/t/p/original${img}` : notFound} alt={nombre} />
            </div>
            <h3 className="text-white mt-2">
                {nombre}
            </h3>
            <h4 className="text-white mt-1">
                {rol.length > 23 ? `${rol.slice(0,23)}...` : rol}
            </h4>            
        </Link>
    )
}

export default CardReparto;