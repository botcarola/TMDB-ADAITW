import { GoSearch } from "react-icons/go";

const Busqueda = ({tipo}) => {

    return (
    <form className="relative text-gray-600">
        <input type="text" 
        name="serch" 
        placeholder={tipo} 
        className="bg-zinc-800 text-slate-200 h-11 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <GoSearch />
        </button>
    </form>
    )
}

export default Busqueda;
