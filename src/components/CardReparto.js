import { Link } from "react-router-dom";

const CardReparto = ({img, nombre, rol }) => {      

    return(
        <Link to="/"  className="w-55 m-1 mb-3">
            <div>
                <img className="w-5/5 h-80" src={`https://image.tmdb.org/t/p/original${img}`} alt={nombre} />
            </div>
            <h3 className="text-white mt-2">
                {nombre}
            </h3>
            <h4 className="text-white mt-1">
                {rol.length > 25 ? `${rol.slice(0,22)}...` : rol}
            </h4>            
        </Link>
    )
}

export default CardReparto;