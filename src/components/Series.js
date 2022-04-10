import ContainerCards from "./ContainerCards";
import { propsSeries } from "../auxiliares/auxiliar";

const Series = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsSeries.map(curr => 
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
export default Series;