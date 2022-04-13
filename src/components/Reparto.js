import CardReparto from "./CardReparto";
import useFetchDetails from "../hooks/useFetchDetails";

const Reparto = ({categoria, id}) => {

    const elemento = useFetchDetails(false, categoria, id, "credits") 
    const array = elemento.cast 
   
    return(
        <div className="flex flex-wrap justify-center w-3/5">
            {!!array && array.map( curr => 
                <CardReparto 
                key={curr.id}
                img={curr.profile_path}
                nombre={curr.name}
                rol={curr.character}                   
                />
            ) 
            }
        </div>
    )
}

export default Reparto;