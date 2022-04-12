import {useState, useEffect} from "react";
import { apiKey } from "../auxiliares/auxiliar";

const SocialMedia = ({categoria, id}) => {

    const [elemento, setElemento] = useState([])  

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch( `https://api.themoviedb.org/3/${categoria}/${id}/external_ids?api_key=${apiKey}`)
            const data = await res.json()
            setElemento(data)
        }
        fetchApi()        
    }, [])

    console.log(elemento)

    return(
        <li>
            <a href={`https://www.facebook.com/${elemento.facebook_id}`} target="_blank" rel="noopener noreferrer">
            </a>
        </li>
    )
}

export default SocialMedia;