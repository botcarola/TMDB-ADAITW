import { FaFacebookSquare, FaTwitter, FaInstagram, FaImdb } from "react-icons/fa";
import useFetchDetails from "../hooks/useFetchDetails";

const SocialMedia = ({categoria, id}) => {

    const elemento = useFetchDetails(false, categoria, id, "external_ids")
 
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