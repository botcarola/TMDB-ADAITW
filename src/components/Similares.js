import useFetchDetails from "../hooks/useFetchDetails";
import Card from "./Card";

const Similares = ({ categoria, id }) => {

    const elemento = useFetchDetails(false, categoria, id, "similar")
    const array = elemento.results
    console.log(elemento, id, elemento.id)

    return(
        <div className="flex flex-wrap justify-center w-3/5">
            {!!array && array.map( curr => 
            <Card 
            key={curr.id}
            id={curr.id}
            tipoRuta={categoria}
            imagen={curr.poster_path}
            titulo={!!curr.title ? curr.title : curr.name}            
            />                
            )}        
        </div>
    )
}

export default Similares;