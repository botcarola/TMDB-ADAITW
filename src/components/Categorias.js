import { useParams } from "react-router-dom";
import ContainerCards from "./ContainerCards";
import { useState } from "react";
import { tituloSubcategoria } from "../auxiliares/auxiliar";


const Categorias = () => { 
    
    const params = useParams()
    console.log(params)
    const [ paginacion, setPaginacion ] = useState(1)  
    
    return(
        <main className="flex justify-center mb-10">
            {params.subcategoria === "trending" ?
                <div className="flex flex-wrap w-4/6">
                    <ContainerCards
                    url={false}
                    tipoRuta={params.categoria}
                    subtipoRuta={params.subcategoria}
                    titulo={tituloSubcategoria(params.subcategoria, params.categoria)}
                    recortarArray={false}
                    paginado={paginacion} 
                    />        
                </div>
                :
                <div className="flex flex-wrap w-3/4">
                    <ContainerCards
                    url={true}
                    tipoRuta={params.categoria}
                    subtipoRuta={params.subcategoria}
                    titulo={tituloSubcategoria(params.subcategoria, params.categoria)}
                    recortarArray={false}
                    paginado={paginacion} 
                    />        
                </div>
            }
        </main>
    )
}

export default Categorias;