import ContainerCards from "./ContainerCards";
import { propsMain } from "../auxiliares/auxiliar";

const Home = () => {

    return(
        <main className='flex flex-col items-center mb-10'>
            {propsMain.map(curr => 
                <ContainerCards 
                key={curr.id}
                url={curr.url}
                tipoRuta={curr.rutaTipo}
                subtipoRuta={curr.rutaSubtipo}
                titulo={curr.titulo}                
                recortarArray={true}
                paginado={1}
                />
            )}
        </main>      
    )
}

export default Home;