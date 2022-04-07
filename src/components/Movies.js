import ContainerCards from "./ContainerCards";
import { propsMovies } from "../auxiliares/auxiliar";

const Movies = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMovies.map(curr => 
                <ContainerCards 
                key={curr.id}
                url={curr.url}
                tipoRuta={curr.rutaTipo}
                subtipoRuta={curr.rutaSubtipo}
                titulo={curr.titulo}                
                recortarArray={true}
                />
            )}
        </main>      
    )
}
export default Movies;