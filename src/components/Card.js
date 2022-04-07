const Card = ({imagen, titulo}) => {
    return(
    <div className="m-1 mb-3">
        <img className="w-55 h-80" src={`https://image.tmdb.org/t/p/original${imagen}`} alt={titulo} />
        <h3 className="text-slate-200 mt-4 font-thin hover:text-white">
            {titulo}
        </h3>
    </div>
    )
}

export default Card;
 