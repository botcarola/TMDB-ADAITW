import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";


const MenuResponsive = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div onClick={() => setIsOpen(true)}>
            <ImMenu />
        </div>
        
        {!!isOpen &&
            <div className="backdrop-blur-xl w-screen min-h-screen z-20 absolute top-0 right-0  transition ease-in-out duration-500">
                <div className="w-[14rem] bg-gradient-to-r from-red-900 to-black z-50 absolute top-0 right-0 min-h-screen flex flex-col text-left items-center">
                    <div onClick={ () => setIsOpen(false)} className="mt-5 w-3/4 flex justify-end">
                        <AiFillCloseSquare />
                    </div>
                    <Link className="mt-10 mb-5 font-thin" to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link className="mb-5 font-thin" to="/movies" onClick={() => setIsOpen(false)}>
                        Movies
                    </Link>
                    <Link className="mb-5 font-thin" to="/tv" onClick={() => setIsOpen(false)}>
                        Tv
                    </Link>                 
                </div>               
            </div>}        
    </>
  )
}

export default MenuResponsive;