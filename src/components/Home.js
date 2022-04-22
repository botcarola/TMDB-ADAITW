import ContainerCards from "./ContainerCards";
import { propsMain } from "../auxiliares/auxiliar";
import Carrousel from "./Carrousel";

const Home = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            <Carrousel />
            {propsMain.map(curr => 
                <ContainerCards 
                key={curr.id}
                url={curr.url}
                tipoRuta={curr.rutaTipo}
                subtipoRuta={curr.rutaSubtipo}
                titulo={curr.titulo}                
                recortarArray={true}
                paginado={false}
                />
            )}
        </main>      
    )
}

export default Home;