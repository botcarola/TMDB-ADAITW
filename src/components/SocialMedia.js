import {useState, useEffect} from "react";
import { apiKey } from "../auxiliares/auxiliar";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaImdb } from "react-icons/fa";

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
 
    return(
        <>
            <li>
                <a href={`https://www.imdb.com/title/${elemento.imdb_id}/`} target="_blank" rel="noopener noreferrer">
                    <FaImdb />
                </a>
            </li>
            <li>
                <a href={`https://twitter.com/${elemento.twitter_id}`} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href={`https://www.facebook.com/${elemento.facebook_id}`} target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />
                </a>
            </li>
            <li>
                <a href={`https://www.instagram.com/${elemento.instagram_id}/`} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </li>
        </>
    )
}

export default SocialMedia;