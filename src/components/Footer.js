import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import LogoFooter from "../assets/logofooter.svg";

const Footer = () => {

    return(
        <footer className="flex items-center bg-zinc-900 flex-col">
            <ul className="w-48 flex p-3 text-gray-50 text-2xl justify-evenly">
                <li>
                    <a href="https://www.linkedin.com/in/carolina-lerner-223034214/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/botcarola" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/car0labc/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </li>        
            </ul>
            <div className="flex bg-black w-full justify-center">
                <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                    <img className="" src={LogoFooter} alt="Logo sitio the movie database"/>
                </a>                
            </div>            
        </footer>
    )
}

export default Footer;