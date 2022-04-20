import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import ResultadosBusqueda from './components/ResultadosBusqueda';
import VistaDetalle from "./components/VistaDetalle";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Categorias from "./components/Categorias";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {

  return(

    <>        
        <BrowserRouter>
            <Nav />
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/:tipoBusqueda/resultados/:resultados" element={<ResultadosBusqueda />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/:categoria/:id/:info" element={<VistaDetalle />} />
                  <Route path="/:categoria/:subcategoria/page/:pagina" element={<Categorias />} />                    
                  <Route path="/tv" element={<Series />} />        
                  <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />            
        </BrowserRouter>
    </>
  )
}

export default App;
