import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import VistaDetalle from "./components/VistaDetalle";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Categorias from "./components/Categorias";
import Error from "./components/Error";

const App = () => {

  return(
    <>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id/:info" element={<VistaDetalle />} />
              <Route path="/movies/:category/page/:pagina" element={<Categorias />} />                    
              <Route path="/tv" element={<Series />} />
              <Route path="/tv/:id/:info" element={<VistaDetalle />} />  
              <Route path="/tv/:category/page/:pagina" element={<Categorias/>} />
              <Route path="/*" element={<Error />} />
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
