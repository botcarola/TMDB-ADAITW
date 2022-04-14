import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Episodios = ({id, temporadas}) => {

    const [ elemento, setElemento ] = useState([])
    const [ valorSelector, setValorSelector ] = useState(1)

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${valorSelector}?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES`)
            const data = await res.json()
            setElemento(data)
        }
        fetchApi()
        .catch( () => <Link to="/*" />)
    }, [valorSelector])

    const handleChange = (e) => {
        setValorSelector(e.target.value)        
    }

    console.log(elemento)

    return(
        <div className="flex flex-col justify-center mb-10">
            <form className="mb-10 ml-10">
                <label>
                    <select className="w-55 bg-stone-900 text-white border border-white rounded-b-lg p-2" onChange={handleChange}>
                        {!!temporadas && temporadas.map( curr =>
                            <option key={curr.id} value={curr.season_number}>
                                {curr.name}
                            </option>
                        )}
                    </select>
                </label>
            </form>
            <div className="flex flex-wrap justify-center">
                {!!elemento.episodes && elemento.episodes.map( curr =>
                    <div className="flex flex-col text-white w-4/5 sm:w-[28rem] m-2 mb-5">
                        <img className="w-full h-[15rem] sm:w-full sm:h-64 mb-2" src={`https://image.tmdb.org/t/p/original${curr.still_path}`} />
                        <div className="flex mb-2">
                            <h3 className="mr-2">
                                EP: {curr.episode_number}
                            </h3>
                            <h2>
                                {curr.name}
                            </h2>
                        </div>
                        <p className="text-sm font-extralight">
                            {curr.overview}
                        </p>
                    </div>
                )}                
            </div>
        </div>
    )
}

export default Episodios;